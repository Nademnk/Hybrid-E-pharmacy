import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {

  registerForm:FormGroup ;
  
  showPassword: boolean = false; // Track password visibility state

  constructor(private fb:FormBuilder , private userService: UserServiceService, private toastr:ToastrService) {
    // Initialize the form with validators
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  // Function to toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }


  // Function to handle form submission
  onSubmit() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(
        response => {
          this.toastr.success ('User registered successfully!','Success');
          this.registerForm.reset(); // Reset the form after successful registration
        },
        error => {
          this.toastr.error ( 'Registration failed. Please try again.','Error');
        }
      );
    }
  }

}
