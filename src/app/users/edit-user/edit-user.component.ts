import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {User} from '../../service/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
user: User;
  editForm: FormGroup;


  constructor(public auth: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: '',
      email: ''
    });
  }

   editProfile(user: User) {
    const editUser = new User();
    editUser.uid = user.uid;
    editUser.displayName = this.editForm.get('name').value;
    editUser.email = this.editForm.get('email').value;

    this.auth.updateUserData(editUser).then(() => this.router.navigateByUrl('users/profile'));
  }

}
