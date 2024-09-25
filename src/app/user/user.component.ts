import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  users = [
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
