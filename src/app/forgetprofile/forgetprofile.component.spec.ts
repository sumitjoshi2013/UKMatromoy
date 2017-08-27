import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetprofileComponent } from './forgetprofile.component';

describe('ForgetprofileComponent', () => {
  let component: ForgetprofileComponent;
  let fixture: ComponentFixture<ForgetprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
