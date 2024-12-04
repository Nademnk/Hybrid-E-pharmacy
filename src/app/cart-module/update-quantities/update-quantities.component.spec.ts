import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuantitiesComponent } from './update-quantities.component';

describe('UpdateQuantitiesComponent', () => {
  let component: UpdateQuantitiesComponent;
  let fixture: ComponentFixture<UpdateQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateQuantitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
