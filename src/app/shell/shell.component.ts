import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.us.getUser().then(
      (token) => {
        // console.log(token);
      },
      (err) => {
        console.log(err);
        this.us.login();
      }
    );
  }
}
