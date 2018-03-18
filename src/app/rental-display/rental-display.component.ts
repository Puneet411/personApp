import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../models/person-model';
import {Subscription} from 'rxjs/Subscription';
import {PersonService} from '../person.service';
import {DataTableResource} from 'angular5-data-table';
import {LinkedList} from '../models/linked-list';

@Component({
  selector: 'app-rental-display',
  templateUrl: './rental-display.component.html',
  styleUrls: ['./rental-display.component.css']
})
export class RentalDisplayComponent implements OnInit {
  routeParameter;
  rentalArray=[];
  userRental=[];
  userList = new LinkedList();
  displayArray=[];

  constructor(private db:AngularFireDatabase,private route:ActivatedRoute,
              private personService:PersonService) {

    this.route.paramMap.subscribe(params=> {   // getting route parameter( which is last name of user here
      this.routeParameter = params.get('id'); });

   let returnedMap = this.personService.getMap();
    returnedMap.forEach((entryVal,entryKey)=>{  // mapping this map structure in to array, to use it in template
      this.rentalArray.push({
        key:entryKey,
        val:entryVal
      });
      });

    for(let index = 0;index<this.rentalArray.length;index++) { // extracting rental linkedlist array for specific user
      if (this.rentalArray[index].key === this.routeParameter) {
        this.userRental.push(this.rentalArray[index].val.rental);
      }}


    if(this.userRental.length){  // extracting Linkedlist structure  which is present at 0th index of userRental array
     this.userList = this.userRental[0];
      this.displayArray= this.userList.printLinkList();   // getting values stored in linked list by using printLinkList() of Linked list class.
    }};

  }






