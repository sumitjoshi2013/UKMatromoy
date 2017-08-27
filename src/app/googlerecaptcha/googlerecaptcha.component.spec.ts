import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglerecaptchaComponent } from './googlerecaptcha.component';

describe('GooglerecaptchaComponent', () => {
  let component: GooglerecaptchaComponent;
  let fixture: ComponentFixture<GooglerecaptchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglerecaptchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglerecaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
