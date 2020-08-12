import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  reports;
  day;

  constructor(private cs: CourseService, private us: UserService) {}

  ngOnInit(): void {}

  async searchReport(): Promise<any> {
    if (this.day === '') {
      return null;
    }
    const token = await this.us.getUser().then(
      (param) => {
        return param;
      },
      (err) => {
        console.log(err);
        this.us.login();
      }
    );

    this.cs.getCourseworkByDay(token, this.day).subscribe((reports) => {
      console.log(reports);
      this.reports = reports;
    });
  }

  cleanNama(teachers: string): string {
    const teachersArray = teachers.split(',');
    const param = teachersArray.map((teacher) => {
      return teacher.replace('@kwikkiangie.ac.id', '');
    });
    return param.join(', ');
  }
}
