import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialinformationComponent } from './residentialinformation.component';

describe('ResidentialinformationComponent', () => {
  let component: ResidentialinformationComponent;
  let fixture: ComponentFixture<ResidentialinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentialinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
