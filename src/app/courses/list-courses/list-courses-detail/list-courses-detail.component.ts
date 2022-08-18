import { Component, Input, OnInit } from '@angular/core';
import { course } from '../../models/courses';

@Component({
  selector: 'app-list-courses-detail',
  templateUrl: './list-courses-detail.component.html',
  styleUrls: ['./list-courses-detail.component.css']
})
export class ListCoursesDetailComponent implements OnInit {
@Input() course: course = new course ()
  constructor() { }

  ngOnInit(): void {
  }

}
