import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-signUp',
  templateUrl: 'signUp.page.html',
  styleUrls: ['signUp.page.scss'],
})
export class signUpComponent {
  // user?: User[];
  user: User = new User();
  submitted = false;
  public userData;

  constructor(private UserService: UserService) { }

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
      console.log("dsafadsf", data);
      this.userData = data;
    });
  }

  signUp(): void {
    for (var i = 0; i < this.userData.length; i++) {
      if (this.userData[i].email == this.user.email) {
        alert("Already email");
        break;
      }
      // else {
      //   alert('Created new item successfully!');
      //   this.UserService.create(this.user).then(() => {
      //   });
      // }
    }
    this.UserService.create(this.user).then(() => {
    });

  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
}
