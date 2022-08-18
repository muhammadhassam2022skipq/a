import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { signinModel } from '../models/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  signinInfo(signin: signinModel) {
    if (signin.email=== "hassamkaleem125@gmail.com" && signin.password==="123") {
      console.log("signin.email: ", signin.email);
      console.log('signin.password', signin.password)
        this.router.navigate(['/dashboard']);
    }
  }

}
