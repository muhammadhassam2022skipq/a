import { Injectable } from '@angular/core';
import { course } from './models/courses';

@Injectable()

export class CourseService {
  courses: Array<course> = []
  constructor() {}
  public addCourses (course: course) {
    this.courses.push(course)
}
public editCourse (course: course) {
  const existingUserIndex: number = this.courses.findIndex(x => x.id === course.id);
  // const existingUserIndex: number = this.courses.findIndex(course,1)
  if (existingUserIndex >= 0 ) {
    this.courses[existingUserIndex].courseTitle= course.courseTitle;
    this.courses[existingUserIndex].courseContent= course.courseContent;
    this.courses[existingUserIndex].courseDuration= course.courseDuration;
    this.courses[existingUserIndex].isAvailable= course.isAvailable;
  }
}
}
