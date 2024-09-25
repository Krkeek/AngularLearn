import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserType} from "../../../declaration";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user: UserType = {
    id: 0,
    name: "",
  }

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from the Child Component!');
  }

}
