import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FriendComponent} from "./friend/friend.component";

const routes: Routes = [
  // you need to specifiy the home comoponent if he visit home page same for other components.
  {path: 'home',component: HomeComponent},
  {path: 'friend' , component: FriendComponent},
  // and when user doesn't specify anything ,where he is going then empty path will take them to home
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
