import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesService } from '../service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
})
export class CourseComponent {
  title = "List of Courses";
  courses;
    constructor(service: CoursesService) {
      this.courses = service.getCourses();
    }
  


}
