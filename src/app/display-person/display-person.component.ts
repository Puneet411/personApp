import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Person} from '../models/person-model';
import {HttpClient} from '@angular/common/http';
import {PersonService} from '../person.service';
import {Subscription} from 'rxjs/Subscription';
import {DataTableResource} from 'angular5-data-table';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-display-person',
  templateUrl: './display-person.component.html',
  styleUrls: ['./display-person.component.css']
})
export class DisplayPersonComponent{
  filteredPerson:any[];
 p;
 returnArray=[];

  constructor(private personService:PersonService) {
    this.p = this.personService.getMap();  // this statement gets map which we are using as intermediate storage.
    this.p.forEach((entryVal,entryKey)=>{  // mapping this map structure in to array, to use it in template
      this.returnArray.push({
        key:entryKey,
        val:entryVal
      });
    });
    this.returnArray=this.returnArray.sort((a,b)=>{   // sorting array based on last names
      let name1=a.key;
      let name2=b.key;
      if(name1 > name2) return 1;
      if(name1 < name2) return -1;
      return 0;
      });
    this.filteredPerson=this.returnArray;

  }

  filter(search:string){    // filtering elements based on search term
    this.filteredPerson=(search) ?
      this.returnArray.filter(p=> p.val.name.includes(search) || p.val.age.includes(search) || p.val.address.includes(search)):
      this.returnArray;
  }








  }








