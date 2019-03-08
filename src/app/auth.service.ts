import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Handle user login/logout/verifier
export class AuthService {
  loggedUser: string;

  constructor() {

  }

  // Returns the value in localStorage
  checkIfLoggedIn(): string {
    return localStorage.getItem('user');
  }

  // Set username in local storage
  login(user: string) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  // Clear localStorage
  logout(): void {
    localStorage.clear();
  }

}
