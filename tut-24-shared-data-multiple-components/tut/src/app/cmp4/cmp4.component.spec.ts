import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp4Component } from './cmp4.component';

describe('Cmp4Component', () => {
  let component: Cmp4Component;
  let fixture: ComponentFixture<Cmp4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cmp4Component]
    });
    fixture = TestBed.createComponent(Cmp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
