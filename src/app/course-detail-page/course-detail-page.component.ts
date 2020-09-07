import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private us: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.us.getUser().then(
      (res) => {
        this.route.paramMap.subscribe((param) => {
          this.courseId = param.get('courseId');

          this.getCourseDetail();
        });
      },
      (err) => {
        this.router.navigate(['login'], { replaceUrl: true });
      }
    );
  }

  async getCourseDetail(): Promise<any> {
    const token = await this.us.getUser().then(
      (param) => {
        // console.log(param);
        return param;
      },
      (err) => {
        console.log(err);
        this.router.navigate(['login']);
      }
    );

    this.getCourse(token, this.courseId);
    this.getCoursework(token, this.courseId);
    this.getTeacher(token, this.courseId);
    this.getStudent(token, this.courseId);
  }

  getCourse(token, courseId): void {
    this.cs.getCourse(token, courseId).subscribe(
      (param) => {
        this.course = param;
        // console.log(param);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTeacher(token, courseId): void {
    this.cs.getTeacher(token, courseId).subscribe(
      (param) => {
        this.teachers = param;
        // console.log(param);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getStudent(token, courseId): void {
    this.cs.getStudent(token, courseId).subscribe(
      (param) => {
        this.students = param;
        // console.log(param);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCoursework(token, courseId): void {
    this.cs.getCoursework(token, courseId).subscribe(
      (param) => {
        this.courseworks = param;
        // console.log(param);
      },
      (err) => {
        console.log(err);
      }
    );
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
