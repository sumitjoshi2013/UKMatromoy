import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksshowinginterestComponent } from './thanksshowinginterest.component';

describe('ThanksshowinginterestComponent', () => {
  let component: ThanksshowinginterestComponent;
  let fixture: ComponentFixture<ThanksshowinginterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanksshowinginterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksshowinginterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
