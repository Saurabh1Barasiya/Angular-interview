import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutdataComponent } from './putdata.component';

describe('PutdataComponent', () => {
  let component: PutdataComponent;
  let fixture: ComponentFixture<PutdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PutdataComponent]
    });
    fixture = TestBed.createComponent(PutdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
