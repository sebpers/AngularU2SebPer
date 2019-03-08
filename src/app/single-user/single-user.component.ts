import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// single user component shows clicked users name

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent {
  // user uses to write out clicked used on screen
  user: string;

  constructor(private activated_route: ActivatedRoute) {
    this.activated_route.params.subscribe(params => {
      // gives user an "id"
      this.user = params.id;
    })
  }

}
