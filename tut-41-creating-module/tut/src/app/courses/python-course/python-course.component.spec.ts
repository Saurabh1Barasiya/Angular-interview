import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonCourseComponent } from './python-course.component';

describe('PythonCourseComponent', () => {
  let component: PythonCourseComponent;
  let fixture: ComponentFixture<PythonCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonCourseComponent]
    });
    fixture = TestBed.createComponent(PythonCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
