import {Component, OnDestroy, OnInit} from '@angular/core';
import {Person} from '../models/person-model';
import {Subscription} from 'rxjs/Subscription';
import {PersonService} from '../person.service';
import {DataTableResource} from 'angular5-data-table';

@Component({
  selector: 'app-filter-age',
  templateUrl: './filter-age.component.html',
  styleUrls: ['./filter-age.component.css']
})
export class FilterAgeComponent implements OnDestroy {
  filteredPerson:any[];
  person:Person[];
  p;
  returnArray=[];
  constructor(private personService:PersonService) {
    this.p = this.personService.getMap();  // getting map storing data
    this.p.forEach((entryVal,entryKey)=>{   // converting map into array
      this.returnArray.push({
        key:entryKey,
        val:entryVal
      });
    });
    this.returnArray = this.returnArray.filter(p=>(p.val.age > 22 && p.val.age < 51)); // applying filter on this array for specific age range
    };
   }














