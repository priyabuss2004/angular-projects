import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './usercard.html',
  styleUrl: './usercard.scss',
})
export class Usercard {
  @Input() name!: string;
  @Input() email!: string;

  // Emits a string value when triggered
  @Output() dataEmitter = new EventEmitter<string>();
  @Output() deleteUser = new EventEmitter<string>();

  // Emit data to parent component
 /* sendData() {
    this.dataEmitter.emit('Hello from child!');
  }
 */   
  onDelete() {
    this.deleteUser.emit(this.name); // Emit user name or ID
  }
}
