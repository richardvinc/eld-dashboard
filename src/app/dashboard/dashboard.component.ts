import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';

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

  constructor(private cs: CourseService, private us: UserService) {}

  ngOnInit(): void {
    // this.getCourses();
    this.us.getUser().then(
      (token) => {
        console.log(token);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCourses(): void {
    this.cs
      .getCourses()
      .then((courses) => {
        this.courses = courses;
      })
      .catch((err) => {
        console.log(err);
      });

    // .subscribe((courses) => {
    //   this.courses = courses;
    // });
  }

  clearFilter(): void {
    this.searchProdi = '';
    this.searchText = '';
    this.searchHari = '';
  }
}
