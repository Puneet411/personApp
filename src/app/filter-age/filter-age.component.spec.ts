import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAgeComponent } from './filter-age.component';

describe('FilterAgeComponent', () => {
  let component: FilterAgeComponent;
  let fixture: ComponentFixture<FilterAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
