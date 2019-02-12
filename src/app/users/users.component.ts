import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  url = 'http://localhost:8089/users';
  users: User[];
  constructor(private httpClient:HttpClient) {
    httpClient.get(this.url).subscribe(
      (data: User[])=>{
        this.users = data;
      });
}

  ngOnInit() {
  }

}