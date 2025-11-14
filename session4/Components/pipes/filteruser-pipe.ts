import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterusers',
  standalone: true
})
export class FilteruserPipe implements PipeTransform {
  transform(users: any, searchText: string): any[] {
    if (!users || !searchText) return users;
    const lowerSearch = searchText.toLowerCase();
    return users.filter(
      (user: any) => user.name.toLowerCase().includes(lowerSearch));
  }
}
