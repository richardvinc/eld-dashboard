import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecherCardComponent } from './techer-card.component';

describe('TecherCardComponent', () => {
  let component: TecherCardComponent;
  let fixture: ComponentFixture<TecherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
