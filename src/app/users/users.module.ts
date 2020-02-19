import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {ProfileComponent} from '../profile/profile.component';
import {
  _MatMenuDirectivesModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule, MatSidenavModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    _MatMenuDirectivesModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
  ]
})
export class UsersModule { }
