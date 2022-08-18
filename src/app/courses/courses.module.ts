import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddCourseFromComponent } from './add-course/add-course-from/add-course-from.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditCourseFormComponent } from './edit-course/edit-course-form/edit-course-form.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ListCoursesDetailComponent } from './list-courses/list-courses-detail/list-courses-detail.component';
import { FormsModule } from '@angular/forms';
import { CourseService } from './course.service';


@NgModule({
  declarations: [
    AddCourseComponent,
    AddCourseFromComponent,
    EditCourseComponent,
    EditCourseFormComponent,
    ListCoursesComponent,
    ListCoursesDetailComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ],
  providers:[
    CourseService
  ]
})
export class CoursesModule { }
