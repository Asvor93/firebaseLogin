import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {ProfileComponent} from '../profile/profile.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
