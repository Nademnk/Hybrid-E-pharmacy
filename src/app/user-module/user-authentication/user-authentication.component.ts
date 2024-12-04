import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrl: './user-authentication.component.css'
})
export class UserAuthenticationComponent {

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  isLoginFormVisible = false;  // Controls the form visibility

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // Initialize the login form
    this.loginForm = this.formBuilder.group({
      emailOrPhone: ['', [Validators.required, Validators.pattern(/^(\+?\d{10,13})|(^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3})$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Show or hide login form when profile icon is clicked
  toggleLoginForm() {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }

  // Close the login form
  closeForm() {
    this.isLoginFormVisible = false;
    this.loginForm.reset(); // Clear form fields
  }

  // Submit the login form
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Call AuthService to authenticate
    this.authService.login(this.loginForm.value.emailOrPhone, this.loginForm.value.password).subscribe({
      next: (response) => {
        this.toastr.success('Login successful!', 'Success');
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        this.toastr.error('Invalid login credentials', 'Error');
      }
    });
  }
 
  
    passwordFieldType: string = 'password'; // Initially set to password
  
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    }
  
    


  }
