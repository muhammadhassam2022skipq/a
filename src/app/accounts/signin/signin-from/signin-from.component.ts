import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { signinModel } from '../../models/signin';

@Component({
  selector: 'app-signin-from',
  templateUrl: './signin-from.component.html',
  styleUrls: ['./signin-from.component.css']
})


export class SigninFromComponent implements OnInit {
  @Output() signinInfo: EventEmitter<signinModel> = new EventEmitter();
  constructor() { }
  email: string = "";
  password: string = "";
  ngOnInit(): void {
  }
  onSigninSubmit() {
    const signinData= {
      email : this.email,
      password: this.password
     };
     this.signinInfo.emit(signinData);
  }

}
