import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingInformationComponent } from './tracking-information.component';

describe('TrackingInformationComponent', () => {
  let component: TrackingInformationComponent;
  let fixture: ComponentFixture<TrackingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackingInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
