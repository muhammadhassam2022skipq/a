import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { course } from '../../models/courses';
import  {v4} from 'uuid'

@Component({
  selector: 'app-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: ['./edit-course-form.component.css']
})
export class EditCourseFormComponent implements OnInit {
  @Output() edittedCourse: EventEmitter<course> = new EventEmitter<course>();
  id: string  = "";
  courseTitle: string = "";
  courseContent: string = "";
  courseDuration: string = "";
  isAvailable: boolean= false

  constructor() { }

  ngOnInit(): void {
  }
  onCourseEdition() {
    const course = {
      id: v4(),
      courseTitle : this.courseTitle,
      courseContent: this.courseContent,
      courseDuration: this.courseDuration,
      isAvailable: this.isAvailable
    }

    this.edittedCourse.emit(course)


  }

}
