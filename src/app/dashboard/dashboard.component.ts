import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

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

  constructor(private cs: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.cs.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  clearFilter(): void {
    this.searchProdi = '';
    this.searchText = '';
    this.searchHari = '';
  }
}
