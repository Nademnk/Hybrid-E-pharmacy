import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionUploadComponent } from './prescription-upload/prescription-upload.component';
import { PrescriptionVerificationComponent } from './prescription-verification/prescription-verification.component';
import { PrescriptionManagementComponent } from './prescription-management/prescription-management.component';



@NgModule({
  declarations: [
    PrescriptionUploadComponent,
    PrescriptionVerificationComponent,
    PrescriptionManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrescriptionModuleModule { }
