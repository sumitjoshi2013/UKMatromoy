import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprofilesComponent } from './searchprofiles.component';

describe('SearchprofilesComponent', () => {
  let component: SearchprofilesComponent;
  let fixture: ComponentFixture<SearchprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
