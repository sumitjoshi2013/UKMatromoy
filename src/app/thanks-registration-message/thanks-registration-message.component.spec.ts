import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksRegistrationMessageComponent } from './thanks-registration-message.component';

describe('ThanksRegistrationMessageComponent', () => {
  let component: ThanksRegistrationMessageComponent;
  let fixture: ComponentFixture<ThanksRegistrationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksRegistrationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksRegistrationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
