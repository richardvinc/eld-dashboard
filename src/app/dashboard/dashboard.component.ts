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
    this.getCourses();
  }

  async getCourses(): Promise<any> {
    const token = await this.us.getUser().then(
      (param) => {
        return param;
      },
      (err) => {
        console.log(err);
        this.us.login();
      }
    );

    this.cs.getCourses(token).subscribe((courses) => {
      this.courses = courses;
    });
  }

  clearFilter(): void {
    this.searchProdi = '';
    this.searchText = '';
    this.searchHari = '';
  }
}
