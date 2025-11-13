import { Routes } from '@angular/router';
import { RegisterUser } from './register-user/register-user';
import { UserList } from './user-list/user-list';
import { AppTest } from './components/app-test/app-test';

export const routes: Routes = [
  { path: '', component: AppTest },
  { path: 'register', component: RegisterUser },
  { path: 'users', component: UserList }
];
