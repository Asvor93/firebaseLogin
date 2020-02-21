import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {AuthService} from '../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService) { }

  ngOnInit() { }

}
