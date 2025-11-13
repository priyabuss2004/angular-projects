import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService, RegisteredUser } from '../services/user';
import { Observable } from 'rxjs';
import { Highlight } from '../directives/highlight';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    Highlight
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  users$: Observable<RegisteredUser[]>;
  expandedUser: string | null = null;

  constructor(private userService: UserService) {
    this.users$ = this.userService.users$;
  }

  viewUser(username: string): void {
    this.expandedUser = this.expandedUser === username ? null : username;
  }

  deleteUser(username: string): void {
    if (confirm(`Are you sure you want to delete user "${username}"?`)) {
      const success = this.userService.deleteUser(username);
      if (success) {
        alert('User deleted successfully!');
      } else {
        alert('Failed to delete user!');
      }
    }
  }
}
