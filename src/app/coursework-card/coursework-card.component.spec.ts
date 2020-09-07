import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseworkCardComponent } from './coursework-card.component';

describe('CourseworkCardComponent', () => {
  let component: CourseworkCardComponent;
  let fixture: ComponentFixture<CourseworkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseworkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseworkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
