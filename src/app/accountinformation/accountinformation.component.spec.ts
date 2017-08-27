import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountinformationComponent } from './accountinformation.component';

describe('AccountinformationComponent', () => {
  let component: AccountinformationComponent;
  let fixture: ComponentFixture<AccountinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
