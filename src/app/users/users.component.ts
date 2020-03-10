import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {User} from '../service/user';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users: User[];
  user: Observable<User>;
  ngOnInit() {
  }

  setAsAdmin(user: User) {
    return this.auth.setIsAdmin(user);
  }
  setAsNotAdmin(user: User) {
    return this.auth.setAsNotAdmin(user);
  }
}
