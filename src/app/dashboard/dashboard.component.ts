import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  courses = [];
  searchText = '';
  searchProdi = '';
  searchHari = '';

  prodi = ['', 'AK', 'MJ', 'AB', 'IK', 'SI', 'TI'];
  hari = ['', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  constructor(
    private cs: CourseService,
    private us: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.us.getUser().then(
      (res) => {
        this.getCourses();
      },
      (err) => {
        console.log(err);
        this.router.navigate(['login'], { replaceUrl: true });
      }
    );
  }

  async getCourses(): Promise<any> {
    const token = await this.us.getUser().then(
      (param) => {
        return param;
      },
      (err) => {
        console.log(err);
        this.router.navigate(['login']);
      }
    );

    this.cs.getCourses(token).subscribe(
      (courses) => {
        this.courses = courses;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  clearFilter(): void {
    this.searchProdi = '';
    this.searchText = '';
    this.searchHari = '';
  }
}
