import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'firebase';
import { UserService } from '../user.service';

@Component({
  selector: 'app-course-detail-page',
  templateUrl: './course-detail-page.component.html',
  styleUrls: ['./course-detail-page.component.scss'],
})
export class CourseDetailPageComponent implements OnInit {
  courseId;
  course = null;
  teachers = null;
  students = null;
  courseworks = null;

  constructor(
    private route: ActivatedRoute,
    private cs: CourseService,
    private us: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('courseId');

      this.getCourseDetail();
    });
  }

  async getCourseDetail(): Promise<any> {
    const token = await this.us.getUser().then(
      (param) => {
        console.log(param);
        return param;
      },
      (err) => {
        console.log(err);
        this.us.login();
      }
    );

    this.getCourse(token, this.courseId);
    this.getCoursework(token, this.courseId);
    this.getTeacher(token, this.courseId);
    this.getStudent(token, this.courseId);
  }

  getCourse(token, courseId): void {
    this.cs.getCourse(token, courseId).subscribe((param) => {
      this.course = param;
      console.log(param);
    });
  }

  getTeacher(token, courseId): void {
    this.cs.getTeacher(token, courseId).subscribe((param) => {
      this.teachers = param;
      console.log(param);
    });
  }

  getStudent(token, courseId): void {
    this.cs.getStudent(token, courseId).subscribe((param) => {
      this.students = param;
      console.log(param);
    });
  }

  getCoursework(token, courseId): void {
    this.cs.getCoursework(token, courseId).subscribe((param) => {
      this.courseworks = param;
      console.log(param);
    });
  }

  titleCase(str): string {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word.replace(word[0], word[0].toUpperCase());
      })
      .join(' ');
  }
}
