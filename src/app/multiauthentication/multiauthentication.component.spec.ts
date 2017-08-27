import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiauthenticationComponent } from './multiauthentication.component';

describe('MultiauthenticationComponent', () => {
  let component: MultiauthenticationComponent;
  let fixture: ComponentFixture<MultiauthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiauthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiauthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
