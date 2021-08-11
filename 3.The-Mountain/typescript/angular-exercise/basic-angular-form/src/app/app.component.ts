import { Component } from '@angular/core';

//
interface friendsInterface{
  firstname:string;
  lastname:string;
  email:string;
  phoneNumber:number;
}
//we create a array by making a variable
const friendsArray:friendsInterface[]=[
  {
    firstname: 'Prince',
    lastname:'Issar',
    email: 'princeissar@gmail.com',
    phoneNumber: 32485732118
  },
  {
    firstname: 'Joel',
    lastname:'Issar',
    email: 'joel@gmail.com',
    phoneNumber: 3232323232
  }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-angular-form';
  constructor() {}

  containFriendArray = friendsArray;


}
