import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';
import { json2csv } from 'json-2-csv';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  reports;
  day = '';
  searchClicked = false;
  constructor(private cs: CourseService, private us: UserService) {}

  ngOnInit(): void {}

  async searchReport(): Promise<any> {
    if (this.day === '') {
      return null;
    }

    this.searchClicked = true;

    const token = await this.us.getUser().then(
      (param) => {
        return param;
      },
      (err) => {
        this.searchClicked = false;
        console.log(err);
        this.us.login();
      }
    );

    this.cs.getCourseworkByDay(token, this.day).subscribe((reports) => {
      console.log(reports);
      this.reports = reports;
    });
  }

  exportReport(): void {
    json2csv(
      this.reports,
      (err, res) => {
        if (err) {
          console.log(err);
        }

        const blob = new Blob([res], { type: 'text/csv;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);

        // console.log(res);
      },
      {
        expandArrayObjects: true,
        unwindArrays: true,
        emptyFieldValue: '',
        excelBOM: true,
      }
    );
  }

  cleanNama(teachers: string): string {
    const teachersArray = teachers.split(',');
    const param = teachersArray.map((teacher) => {
      return teacher.replace('@kwikkiangie.ac.id', '');
    });
    return param.join(', ');
  }
}
