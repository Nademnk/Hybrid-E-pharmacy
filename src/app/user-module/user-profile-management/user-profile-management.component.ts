import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile-management',
  templateUrl: './user-profile-management.component.html',
  styleUrl: './user-profile-management.component.css'
})
export class UserProfileManagementComponent implements OnInit {


  profileForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userServiceService: UserServiceService,
    private toastr: ToastrService
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: [{ value: '', disabled: false}, [Validators.required, Validators.email]], // Disable email if needed
      phone: ['', Validators.required, Validators.pattern('^[0-9]{10}$')],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.isLoading = true;
    this.userServiceService.getUserProfile().subscribe(
      (data) => {
        this.profileForm.patchValue({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address
        });
        this.isLoading = false;
      },
      (error) => {
        this.toastr.error('Failed to load user profile', 'Error');
        this.isLoading = false;
      }
    );
  }

  onUpdateProfile(): void {
    if (this.profileForm.valid) {
      this.isLoading = true;
      this.userServiceService.updateUserProfile(this.profileForm.value).subscribe(
        (response) => {
          // Perform the update actions
          this.toastr.success('Profile updated successfully!', 'Success');
          this.isLoading = false;
        },
        (error) => {
          this.toastr.error('Profile update failed. Please try again.', 'Error');
          this.isLoading = false;
        }
      );
    } else {
      // Handle the form being invalid (show error messages)
      this.toastr.warning('Please fill in all required fields', 'Warning');
      this.profileForm.markAllAsTouched(); // This will highlight all invalid fields
    }
  }


  
}
