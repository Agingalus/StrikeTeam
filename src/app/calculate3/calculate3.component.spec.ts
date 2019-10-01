import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculate3Component } from './calculate3.component';

describe('Calculate3Component', () => {
  let component: Calculate3Component;
  let fixture: ComponentFixture<Calculate3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calculate3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculate3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
