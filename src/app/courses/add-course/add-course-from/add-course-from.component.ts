import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { course } from '../../models/courses';
import {v4} from "uuid"

@Component({
  selector: 'app-add-course-from',
  templateUrl: './add-course-from.component.html',
  styleUrls: ['./add-course-from.component.css']
})
export class AddCourseFromComponent implements OnInit {
  @Output() addedCourse: EventEmitter<course> = new EventEmitter<course>();
  id: string  = "";
  courseTitle: string = "";
  courseContent: string = "";
  courseDuration: string = "";
  isAvailable: boolean= false
  constructor() { }

  ngOnInit(): void {
  }
  onCourseAddition(): void {
    const course = {
      id:v4(),
      courseTitle : this.courseTitle,
      courseContent: this.courseContent,
      courseDuration: this.courseDuration,
      isAvailable: this.isAvailable
    }

    this.addedCourse.emit(course)

  }

}
