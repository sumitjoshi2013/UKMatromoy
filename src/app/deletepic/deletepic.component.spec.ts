import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepicComponent } from './deletepic.component';

describe('DeletepicComponent', () => {
  let component: DeletepicComponent;
  let fixture: ComponentFixture<DeletepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
