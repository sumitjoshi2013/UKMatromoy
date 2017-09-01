import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInterestComponent } from './show-interest.component';

describe('ShowInterestComponent', () => {
  let component: ShowInterestComponent;
  let fixture: ComponentFixture<ShowInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
