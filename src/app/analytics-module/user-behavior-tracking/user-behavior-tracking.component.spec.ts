import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBehaviorTrackingComponent } from './user-behavior-tracking.component';

describe('UserBehaviorTrackingComponent', () => {
  let component: UserBehaviorTrackingComponent;
  let fixture: ComponentFixture<UserBehaviorTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserBehaviorTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBehaviorTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
