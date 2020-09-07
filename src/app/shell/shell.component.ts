import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {
  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.us.logout();
    this.router.navigate(['login'], { replaceUrl: true });
  }
}
