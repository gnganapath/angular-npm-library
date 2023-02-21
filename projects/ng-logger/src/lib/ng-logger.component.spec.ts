import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLoggerComponent } from './ng-logger.component';

describe('NgLoggerComponent', () => {
  let component: NgLoggerComponent;
  let fixture: ComponentFixture<NgLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
