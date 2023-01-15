import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-signUp',
  templateUrl: 'signUp.page.html',
  styleUrls: ['signUp.page.scss'],
})
export class signUpComponent {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }
  
  ngOnInit() { }

  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        this.authService.SendVerificationMail();
        alert("Register success");
        this.router.navigate(['signin']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
