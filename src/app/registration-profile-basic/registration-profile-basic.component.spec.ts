import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationProfileBasicComponent } from './registration-profile-basic.component';

describe('RegistrationProfileBasicComponent', () => {
  let component: RegistrationProfileBasicComponent;
  let fixture: ComponentFixture<RegistrationProfileBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationProfileBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationProfileBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
