import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherinformationsComponent } from './otherinformations.component';

describe('OtherinformationsComponent', () => {
  let component: OtherinformationsComponent;
  let fixture: ComponentFixture<OtherinformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherinformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherinformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
