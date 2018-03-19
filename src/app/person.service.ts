import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Person} from './models/person-model';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase/app';
import {until} from 'selenium-webdriver';
import elementIsSelected = until.elementIsSelected;
import {LinkedList} from './models/linked-list';
import {Link} from './models/link';


@Injectable()
export class PersonService {
rental:[]=[];
person:Person[]=[];
map = new Map();  // creating map object

  constructor(private db:AngularFireDatabase) {}
    getMap(){   // method which returns map
    return this.map;}


  create(name1,last1,age1,children1,address1,home1,cell1,office1){   // method for creating new user 
    this.map.set(last1,{name:name1,age:age1,children:children1,address:address1,home:home1,cell:cell1,office:office1}); // this info is added to map
    this.db.object('/person/'+ last1).set({    // here user info is stored into firebase.
      'name':name1,
      'age':age1,
      'children':children1,
      'address':address1,
      'home':home1,
      'cell':cell1,
      'office':office1
    });
  }
  displayAll() {    // method which gets whole data from firebase
    return this.db.list('/person/');
  }

  addRental(house,date,id){  // method which adds rental property to each user based on id which is last name of user.
    //let t1 = new LinkedList();
    //t1.append({owner:id,house:house,date:date});
    this.rental.push({'house':house,'date':date});    // first object is pushed into array
    this.db.object('/person/'+ id + '/rental').set(this.rental);  // this array is then stored in firebase.
  }

  //getRental(id){
   // return this.db.list('/person/'+ id +'/rental');
  //}

  initialize(){  // method is called every time our app reloads. It is called in app component.
     this.displayAll().subscribe(item=>{
       item.forEach(i =>{
         let personList = new LinkedList();
         if(i.rental){
         for(let rent=0; rent<i.rental.length;rent++){   // loop used for iterating through rental array stored in firebase
           personList.append({house:i.rental[rent].house,date:i.rental[rent].date})
         }}
         this.map.set(i.$key,{name:i.name,age:i.age,children:i.children,address:i.address,home:i.home,cell:i.cell,office:i.office,rental:personList});
         });});
     return (this.map);}
}


