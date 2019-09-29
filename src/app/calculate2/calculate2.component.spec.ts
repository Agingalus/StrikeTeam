import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculate2Component } from './calculate2.component';

describe('Calculate2Component', () => {
  let component: Calculate2Component;
  let fixture: ComponentFixture<Calculate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calculate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
