import { Component } from '@angular/core';
import { Usercard } from '../usercard/usercard';
import { FilteruserPipe } from '../filteruser-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  imports: [Usercard, FilteruserPipe, FormsModule],
  templateUrl: './user-list.html',
  standalone: true,
  styleUrl: './user-list.scss',
})
export class UserList {

users = [
    { name: 'Priyanka', email: 'priyanka@example.com', isPremium: true },
    { name: 'Sameer', email: 'sameer@example.com', isPremium: true }
  ];

  searchText = '';

viewProfile(user: any) {
    alert(`Viewing profile of ${user.name}`);
  }

  // Event handler for data emitted from child component
   handleChildData(data: string) {
        console.log('Received data from child:', data);
        // Perform actions based on the received data
      }
   
 removeUser(name: string) {
    this.users = this.users.filter(u => u.name !== name);
  }
   
}
