import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCreationComponent } from './content-creation/content-creation.component';
import { ContentPublishingComponent } from './content-publishing/content-publishing.component';
import { MediaManagementComponent } from './media-management/media-management.component';



@NgModule({
  declarations: [
    ContentCreationComponent,
    ContentPublishingComponent,
    MediaManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CMSModuleModule { }
