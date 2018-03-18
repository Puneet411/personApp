import {Link} from './link';

export class LinkedList{
  head = null;
  length=0;



  append(value){  // method for appending new items to linked list
    let node = new Link(value);
    let current;
    if(this.head === null){
      this.head=node;
    }
    else {
      current=this.head;
      while(current.next){
        current=current.next;
      }
      current.next=node;
    }
    this.length++;
  }

  printLinkList(){  // method which returns values stored in linked list.
   let temp = this.head;
   let valueArray=[];  // array where values of this linked list will be stored

   while(temp !== null){
     valueArray.push(temp.value);
     temp = temp.next;
     }
     return valueArray;
  }
}
