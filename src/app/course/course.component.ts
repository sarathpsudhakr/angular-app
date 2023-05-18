import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
    title = "Courses";
    para = "List of courses";
    courses;

    constructor(service: CourseService) { //Dependency Injection - loose coupling and recommended
      //let service = new CourseService(); //Tight coupling and not recommended
      this.courses = service.getCourses();
    }

    getPara() {
      return this.para;
    }
}
