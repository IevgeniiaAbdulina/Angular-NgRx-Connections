import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimerComponent } from './update-timer.component';

describe('UpdateTimerComponent', () => {
  let component: UpdateTimerComponent;
  let fixture: ComponentFixture<UpdateTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTimerComponent]
    });
    fixture = TestBed.createComponent(UpdateTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
