import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermessagehistoryComponent } from './usermessagehistory.component';

describe('UsermessagehistoryComponent', () => {
  let component: UsermessagehistoryComponent;
  let fixture: ComponentFixture<UsermessagehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermessagehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermessagehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
