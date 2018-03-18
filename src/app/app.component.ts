import { Component } from '@angular/core';
import {PersonService} from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private personService: PersonService){
   this.personService.initialize();
 }
}
