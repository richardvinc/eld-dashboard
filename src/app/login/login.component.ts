import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {
    this.us.getUser().then(
      (res) => {
        this.router.navigate(['dashboard']);
      },
      (err) => {
        console.log('need login');
      }
    );
  }

  login(): void {
    this.us.login().then(
      (res) => {
        this.router.navigate(['dashboard'], { replaceUrl: true });
      },
      (err) => {
        alert('error login');
      }
    );
  }
}
