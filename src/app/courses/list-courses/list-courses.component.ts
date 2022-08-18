import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { course } from '../models/courses';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  courses : Array <course>= []
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
  this.courses=this.courseService.courses;
  }

}
