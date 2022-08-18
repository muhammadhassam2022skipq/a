import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseFromComponent } from './add-course-from.component';

describe('AddCourseFromComponent', () => {
  let component: AddCourseFromComponent;
  let fixture: ComponentFixture<AddCourseFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourseFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourseFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
