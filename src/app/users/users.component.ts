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

  constructor(private auth: AuthService, private afs: AngularFirestore) { }

  users: User[];
  user: Observable<User>;

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.auth.getAllUsers().subscribe(listOfUsers => {
      this.users = listOfUsers;
    });
  }
  deleteUser(uid: string) {
    return this.afs.collection('users').doc(uid).delete();
  }

  setAsAdmin(user: User) {
    return this.auth.setIsAdmin(user);
  }
  setAsNotAdmin(user: User) {
    return this.auth.setAsNotAdmin(user);
  }
  setBlock(user: User) {
    return this.auth.setBlock(user);
  }
  setUnBlock(user: User) {
    return this.auth.unBlock(user);
  }
}
