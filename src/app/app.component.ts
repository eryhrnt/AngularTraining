import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            NavbarComponent,
            CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CoursesService]
})
export class AppComponent {
  courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
  ];

  onAdd(){
    this.courses.push({id: 4, name: "course4"});
  }

  onRemove(course: { id: number; name: string; }){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onChange(course: { id: number; name: string; }){
    course.name = 'UPDATED';

  }

  viewMode = "somethingElse";
}
