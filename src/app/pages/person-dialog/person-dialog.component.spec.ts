import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDialogComponent } from './person-dialog.component';

describe('PersonDialogComponent', () => {
  let component: PersonDialogComponent;
  let fixture: ComponentFixture<PersonDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonDialogComponent]
    });
    fixture = TestBed.createComponent(PersonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
