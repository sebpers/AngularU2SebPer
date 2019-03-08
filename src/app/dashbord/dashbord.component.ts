import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

// This component handles array, add and pop

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})

export class DashbordComponent {
  // List of added users
  userList: string[] = [];
  user: string;

  constructor(private authService: AuthService) {
    // Gets returned value into user
    this.user = this.authService.checkIfLoggedIn();
  }


  // Function push user name to list
  addUser(event: string) {
    if (event !== "") {
      this.userList.push(event);
    }
  }

  // Function delete last user name from list
  deleteUser(): void {
    this.userList.pop();
  }

  // Gets returned key value from localStorage and puts it in user
  checkIfUserLoggedIn() {
    this.user = this.authService.checkIfLoggedIn();
  }

}
