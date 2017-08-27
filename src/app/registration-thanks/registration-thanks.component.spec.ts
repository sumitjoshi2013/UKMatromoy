import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationThanksComponent } from './registration-thanks.component';

describe('RegistrationThanksComponent', () => {
  let component: RegistrationThanksComponent;
  let fixture: ComponentFixture<RegistrationThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
