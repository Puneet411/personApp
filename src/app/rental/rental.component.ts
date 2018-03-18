import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../person.service';
import {Person} from '../models/person-model';
import {Subscription} from 'rxjs/Subscription';
import {DataTableResource} from 'angular5-data-table';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
result;

constructor(private db:AngularFireDatabase,private route:ActivatedRoute,
              private personService:PersonService) {
    this.route.paramMap.subscribe(params=> {  // getting route paramter - last name of user
      this.result = params.get('id');
    });}

    addRental(house,date){     // adding new rental property
    this.personService.addRental(house,date,this.result);
    }
}
