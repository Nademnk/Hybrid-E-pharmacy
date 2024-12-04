import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

// Define the User interface locally
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status:string;//'active' or 'inactive'
  password?: string;  // Optional, as password might not be returned for security reasons
  
}



@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent implements OnInit{
  users: User[] = []; // Now the users array is typed with User interface
  filteredUsers: User[] = [];
  searchTerm = '';
  roleFilter = '';
  currentPage = 1;
  pagination = { total: 0, limit: 10 };
  showPassword: { [key: string]: boolean } = {}; // Track password visibility

  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.adminService.getUsers(this.currentPage).subscribe((response) => {
      this.users = response.users;
      this.filteredUsers = this.users;
      this.pagination = response.pagination;
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      return (
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
      ) && (this.roleFilter === '' || user.role === this.roleFilter);
    });
  }

// Toggle password visibility for a specific user


togglePassword(userId: string) {
  this.showPassword[userId] = !this.showPassword[userId];
}

  editUser(user: User) {
    // Navigate to the user edit form or open a modal to edit user
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUser(userId).subscribe(() => {
        this.loadUsers(); // Reload the user list
      });
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.pagination.total / this.pagination.limit)) {
      this.currentPage++;
      this.loadUsers();
    }
  }

}
