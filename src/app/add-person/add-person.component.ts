import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Person} from '../models/person-model';
import {PersonService} from '../person.service';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  constructor(private db:AngularFireDatabase,private personService:PersonService) {}

  create(name,last,age,children,address,home,cell,office){ // method to create new user
  this.personService.create(name,last,age,children,address,home,cell,office);
  }


}
