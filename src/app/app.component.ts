import { Component } from '@angular/core';

@Component({              //The @Component decorator is used to define and configure components in Angular.
  selector: 'app-root',   //This property specifies the selector used to identify and use the component in HTML templates
  templateUrl: './app.component.html', //This property specifies the external HTML template file associated with the component
  styleUrls: ['./app.component.css'] //This property specifies an array of external CSS files associated with the componen
})
export class AppComponent {
  title = 'angular-app';
}
