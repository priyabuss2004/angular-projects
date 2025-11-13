import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RegisteredUser {
  username: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  role: 'admin' | 'user' | 'guest';
  password: string;
  confirmPassword: string;
  dob: string;
  bio?: string;
  terms: boolean;
  createdDate?: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<RegisteredUser[]>([
    {
      username: 'johndoe',
      email: 'john.doe@example.com',
      gender: 'male',
      role: 'admin',
      password: 'password123',
      confirmPassword: 'password123',
      dob: '1990-05-15',
      bio: 'Software developer with 10 years of experience in web development.',
      terms: true,
      createdDate: new Date().toISOString()
    },
    {
      username: 'janesmithson',
      email: 'jane.smith@example.com',
      gender: 'female',
      role: 'user',
      password: 'securePass456',
      confirmPassword: 'securePass456',
      dob: '1995-08-22',
      bio: 'Digital marketing specialist passionate about brand strategy.',
      terms: true,
      createdDate: new Date().toISOString()
    }
  ]);

  users$: Observable<RegisteredUser[]> = this.usersSubject.asObservable();

  getUsers(): RegisteredUser[] {
    return this.usersSubject.value;
  }

  addUser(user: RegisteredUser): boolean {
    const users = this.usersSubject.value;
    
    if (users.some(u => u.username === user.username || u.email === user.email)) {
      return false;
    }
    
    this.usersSubject.next([...users, { ...user, createdDate: new Date().toISOString() }]);
    return true;
  }

  getUserByUsername(username: string): RegisteredUser | undefined {
    return this.usersSubject.value.find(u => u.username === username);
  }

  updateUser(username: string, updatedUser: RegisteredUser): boolean {
    const users = this.usersSubject.value;
    const index = users.findIndex(u => u.username === username);
    
    if (index === -1) return false;
    
    users[index] = updatedUser;
    this.usersSubject.next([...users]);
    return true;
  }

  deleteUser(username: string): boolean {
    const users = this.usersSubject.value;
    const filteredUsers = users.filter(u => u.username !== username);
    
    if (filteredUsers.length === users.length) return false;
    
    this.usersSubject.next(filteredUsers);
    return true;
  }
}
