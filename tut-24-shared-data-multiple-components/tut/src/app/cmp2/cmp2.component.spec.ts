import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp2Component } from './cmp2.component';

describe('Cmp2Component', () => {
  let component: Cmp2Component;
  let fixture: ComponentFixture<Cmp2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cmp2Component]
    });
    fixture = TestBed.createComponent(Cmp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
