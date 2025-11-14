import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [],
  template: `
  <div class="widget-container">
      <div class ="widget-header">
        <ng-content select="[slot='header']"/>
      </div>
    <div class="widget-content">
          <ng-content >
            <p> No content.. </p>
          </ng-content>

    </div>
  </div>  
  `,
  styleUrl: './widget.scss',
})
export class Widget {

}
