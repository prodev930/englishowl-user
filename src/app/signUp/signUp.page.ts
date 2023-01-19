import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-signUp',
  templateUrl: 'signUp.page.html',
  styleUrls: ['signUp.page.scss'],
})
export class signUpComponent {
  user: User = new User();
  submitted = false;
  public userData=[];

  constructor(private UserService: UserService, public router: Router,) { }

  refreshList(): void {
    this.retrieveTutorials();
  }
  retrieveTutorials(): void {
    this.UserService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.userData = data;
      console.log(data);
    });
  }

  signUp(): void {
    if (this.userData && this.userData.length > 0) {
      let isEmail: boolean = false;
      for (let i in this.userData) {
        console.log(i);
        if (this.userData[i].email == this.user.email) {
          alert("Already email");
          isEmail = true;
          break;
        }
      }
      if (!isEmail) {
        if (this.user.email == '' || this.user.email == undefined && this.user.password == '' || this.user.password == undefined) {
          alert("Correct Input");
        } else {
          this.user.chapter_status = 1;
          this.UserService.create(this.user).then(() => {
          });
          alert('Created new item successfully!');
          this.router.navigate(['signin']);
        }
      }
    } else {
      if (this.user.email == '' || this.user.email == undefined && this.user.password == '' || this.user.password == undefined) {
        alert("Correct Input");
      } else {
        this.user.chapter_status = 1;
        this.UserService.create(this.user).then(() => {
        });
        alert('Created new item successfully!');
        this.router.navigate(['signin']);

      }

    }
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
}
