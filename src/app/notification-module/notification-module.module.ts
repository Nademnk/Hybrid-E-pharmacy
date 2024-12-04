import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailNotificationComponent } from './email-notification/email-notification.component';
import { SmsNotificationComponent } from './sms-notification/sms-notification.component';
import { InAppNotificationComponent } from './in-app-notification/in-app-notification.component';



@NgModule({
  declarations: [
    EmailNotificationComponent,
    SmsNotificationComponent,
    InAppNotificationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationModuleModule { }
