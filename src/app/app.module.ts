import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker'; 
import { provideHttpClient, withFetch } from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
     
      
        timeOut: 3000,  // Toast duration in milliseconds (3 seconds)
        closeButton: true,  // Show close button
        positionClass: 'toast-top-right',  // Position on the screen
        preventDuplicates: true,  // Avoid multiple Toastr messages
        progressBar: true,  // Show a progress bar
        progressAnimation: 'increasing',  // Animation type for progress bar
        extendedTimeOut: 1000,  // How long it waits before auto-closing after user hovers over the toastr
        disableTimeOut: false,  // Ensures that the toastr closes automatically
        easing: 'ease-in',  // Animation easing
        easeTime: 200,  // How fast the animation should complete (faster easing for quick display)
      }),
      
      
   
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideClientHydration(),
   
      provideHttpClient(withFetch())
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
