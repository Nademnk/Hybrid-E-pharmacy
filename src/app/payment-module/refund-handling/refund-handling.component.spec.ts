import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundHandlingComponent } from './refund-handling.component';

describe('RefundHandlingComponent', () => {
  let component: RefundHandlingComponent;
  let fixture: ComponentFixture<RefundHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RefundHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefundHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
