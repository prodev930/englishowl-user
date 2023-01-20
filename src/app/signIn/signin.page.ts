import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';
import { map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { userInfo } from '../models/fireVariable';

@Component({
  selector: 'app-home',
  templateUrl: 'signin.page.html',
  styleUrls: ['signin.page.scss'],
})

export class SignInPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private userService: UserService,
    private globals: userInfo,
  ) { }

  ngOnInit() { }

  logIn(email, password): void {
    this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (email.value == data[i].email) {
          this.globals.setEmail(email.value);
          this.globals.setchapter_status(data[i].chapter_status);
          this.router.navigate(['level']);
        }
        else {
          // alert("False");
        }
      }
    });
  }
}
