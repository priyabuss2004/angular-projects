import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword',
  standalone: true
})
export class HidePasswordPipe implements PipeTransform {

  transform(password: string, show: boolean = false): string {
    if (!password) return '';
    
    if (show) {
      return password;
    }
    
    return '•'.repeat(password.length);
  }

}
