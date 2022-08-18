import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';

const routes: Routes = [
  {path: '', component: ListCoursesComponent},
  {path: 'add', component: AddCourseComponent},
  {path: 'edit', children: [
    {path: ':couserId', component: EditCourseComponent}
  ]},
  {path: 'list', component: ListCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
