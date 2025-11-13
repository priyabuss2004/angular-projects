import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-test',
  imports: [FormsModule],
  templateUrl: './app-test.html',
  styleUrl: './app-test.scss',
})
export class AppTest {

  title : string = 'Angular 20 Data Binding Demo';

  // Property Binding examples
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageTitle = 'Angular Logo';
  imgWidth = 150;
  imgHeight = 150;
  isDisabled = false;
  isHidden = true;
  buttonLabel = 'Submit Form';
  isChecked = true;
  username = '';
  

  func(){

    console.log("username:", this.username);
  }

  // Signals for reactive state
  // Using signals for two-way binding and state management 
  // improves performance
  // any property of class defined as signal will be called as function
  // e.g. theme() to get value and theme.set('newValue') to set value
  theme = signal('yellow') // set internally to 'yellow' theme
  count = 0
  isActive = signal(true)
  classValue = signal("inactive")

// Event handlers
  onClick(event: any) {
    this.imgWidth = 200;
    this.count++;
    this.classValue.set(this.isActive() ? "active" : "inactive");
    this.isActive.set(!this.isActive());
    // update theme using signal
    this.theme.set(this.theme() === 'yellow' ? 'red' : 'yellow');
   
  }


}
