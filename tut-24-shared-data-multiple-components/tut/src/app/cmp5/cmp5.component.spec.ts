import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp5Component } from './cmp5.component';

describe('Cmp5Component', () => {
  let component: Cmp5Component;
  let fixture: ComponentFixture<Cmp5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cmp5Component]
    });
    fixture = TestBed.createComponent(Cmp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
