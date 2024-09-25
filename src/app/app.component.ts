import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {UserType} from "../../declaration";
import {Routes} from '@angular/router';

export const routes: Routes = [];


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularLearn';
  city = 'Chemnitz'
  isLoggedIn = true;
  message = '';

  greet() {
    alert("Hello World!");
  }

  receiveMessage(message: string) {
    this.message = message;
  }

  users: UserType[] = [
    {
      id: 1,
      name: 'Ahmad'
    },
    {
      id: 2,
      name: 'Chris'
    },
    {
      id: 3,
      name: 'Layla'
    },
    {
      id: 4,
      name: 'Mona'
    }
  ];


}
