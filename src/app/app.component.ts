import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavbarComponent,
            CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CoursesService]
})
export class AppComponent {
  title = 'Ery Harinanto';
}
