import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPublishingComponent } from './content-publishing.component';

describe('ContentPublishingComponent', () => {
  let component: ContentPublishingComponent;
  let fixture: ComponentFixture<ContentPublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentPublishingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
