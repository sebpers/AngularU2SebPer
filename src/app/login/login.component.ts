import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

// Call on different components to send and get information

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName: string;
  loggedUser: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    // Calls on checkUser() after all variables are called
    this.checkUser();
  }

  // Send username to auth service
  login(): void {
    if (this.userName.length >= 10 && this.userName.match(/\d/) && this.userName !== null) {
      // Send users name into auth login
      this.authService.login(this.userName);

    } else {
      alert('You need at least 10 characters and one number to login');
    }

  }

  // Calls authService logout
  logout(): void {
    this.authService.logout();
  }

  // Calls authService.checkIfLoggedIn(); and gets the key value and put it in loggedUser
  checkUser(): void {
    this.loggedUser = this.authService.checkIfLoggedIn();
  }
}
