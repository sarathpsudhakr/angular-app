import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './services/course.service';

@NgModule({  //NgModule Decorator
  declarations: [ // This property specifies the components, directives, and pipes that belong to this module
    AppComponent,
    CourseComponent //Register Course Component in the App Module
  ],
  imports: [      //This property defines the other modules that this module depends on
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ //This property is used to register services, providers, dependencies that will be available throughout the application.
    CourseService  //Dependency Injection and Singelton pattern(Angular will provide the single instance it created to all Components) - loose coupling and recommended
  ],
  bootstrap: [AppComponent] //This property specifies the component(s) that will serve as the entry point(s) of the application
})
export class AppModule { } //Makes this module available to be imported by other modules and serve as an entrypoint
