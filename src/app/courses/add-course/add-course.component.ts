import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';
import { course } from '../models/courses';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addedCourse(course: course): void {
    this.courseService.addCourses(course);
    this.router.navigate(['/dashboard/courses/list'])
  }

}
