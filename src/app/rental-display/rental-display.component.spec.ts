import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDisplayComponent } from './rental-display.component';

describe('RentalDisplayComponent', () => {
  let component: RentalDisplayComponent;
  let fixture: ComponentFixture<RentalDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
