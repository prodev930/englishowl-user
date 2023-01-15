import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-home',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss'],
})

export class SignInPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() { }

  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['level']);
          alert("Login success");
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
