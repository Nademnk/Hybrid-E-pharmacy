import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

// Define your API URLs directly
private registerUrl = 'http://localhost:8080/api/User/register'; // Registration URL
private loginUrl = 'http://localhost:8080/api/User/login'; // Login URL
private profileUrl = 'http://localhost:8080/api/User/profile'; // Profile URL

constructor(private http: HttpClient) {}

// Function to register a new user (signup)
registerUser(user: any): Observable<any> {
  return this.http.post(this.registerUrl, user).pipe(
    catchError((error) => {
      console.error('Registration error:', error);
      return throwError(() => new Error('Registration failed. Please try again.'));
    })
  );
}

// Method to handle login requests
login(emailOrPhone: string, password: string): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const body = { emailOrPhone, password }; // API expects emailOrPhone and password

  return this.http.post<any>(this.loginUrl, body, { headers }).pipe(
    map((response) => {
      // If login is successful and the API returns a token
      if (response && response.token) {
        localStorage.setItem('authToken', response.token); // Store the token
      }
      return response;
    }),
    catchError((error) => {
      console.error('Login error:', error);
      return throwError(() => new Error('Login failed. Please check your credentials.'));
    })
  );
}

// Get user profile data
getUserProfile(): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
  });

  return this.http.get(this.profileUrl, { headers }).pipe(
    catchError((error) => {
      console.error('Error fetching profile:', error);
      return throwError(() => new Error('Failed to load user profile.'));
    })
  );
}

// Update user profile data
updateUserProfile(profileData: any): Observable<any> {
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'application/json',
  });

  return this.http.put(this.profileUrl, profileData, { headers }).pipe(
    catchError((error) => {
      console.error('Error updating profile:', error);
      return throwError(() => new Error('Profile update failed. Please try again.'));
    })
  );
}

// Method to handle logout
logout() {
  localStorage.removeItem('authToken'); // Remove the stored token on logout
}

  
}
 

