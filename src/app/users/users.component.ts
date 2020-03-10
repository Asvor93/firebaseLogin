import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {User} from '../service/user';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private auth: AuthService, private afs: AngularFirestore) { }

  users: User[];
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
}
