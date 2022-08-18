import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoursesDetailComponent } from './list-courses-detail.component';

describe('ListCoursesDetailComponent', () => {
  let component: ListCoursesDetailComponent;
  let fixture: ComponentFixture<ListCoursesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCoursesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCoursesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
