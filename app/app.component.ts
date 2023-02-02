// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'web-task';
// }
import { Component, OnInit } from '@angular/core';
import { UserService } from './userservice.service';
import { IUser } from './IUser';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  protected title = 'app';
 // protected users$: Observable<IUser[]>;
users$!: IUser[];
  httpClient: any;
  url!: "http://localhost:5000/Show";
  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    });
  }
}