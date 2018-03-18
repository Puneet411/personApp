import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../models/person-model';
import {AngularFireDatabase} from 'angularfire2/database';
import {DataTableResource} from 'angular5-data-table';
import {Subscription} from 'rxjs/Subscription';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy{
  filteredPerson:any[];
  person:Person[];
  items:Person[]=[];
  itemCount:number;
  subscription:Subscription;
  tableResource:DataTableResource<Person>;
  constructor(private personService:PersonService) {
    this.subscription=this.personService.displayAll().subscribe(person=>{
      this.filteredPerson=this.person = person;
      this.initializeTable(person);
    });
    }

    private initializeTable(person){
    this.tableResource = new DataTableResource(person);
    this.tableResource.query({offset:0})
      .then(items=>this.items=items);
    this.tableResource.count()
      .then(count=> this.itemCount=count);
    }

    reloadItems(params){
    if(!this.tableResource)return;
    this.tableResource.query(params)
      .then(items=>this.items=items);
    }

  filter(search:string){
  this.filteredPerson=(search) ?
    this.person.filter(p=>p.name.includes(search)):
    this.person;
  this.initializeTable(this.filteredPerson);
  }

   ngOnDestroy(){
    this.subscription.unsubscribe();
   }

}
