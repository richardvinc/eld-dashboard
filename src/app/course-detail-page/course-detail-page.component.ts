import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute, private cs: CourseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('courseId');
      this.getCourse(this.courseId);
      this.getCoursework(this.courseId);
      this.getTeacher(this.courseId);
      this.getStudent(this.courseId);
    });
  }

  getCourse(courseId): void {
    this.cs.getCourse(courseId).subscribe((param) => {
      this.course = param;
      console.log(param);
    });
  }

  getTeacher(courseId): void {
    this.cs.getTeacher(courseId).subscribe((param) => {
      this.teachers = param;
      console.log(param);
    });
  }

  getStudent(courseId): void {
    this.cs.getStudent(courseId).subscribe((param) => {
      this.students = param;
      console.log(param);
    });
  }

  getCoursework(courseId): void {
    this.cs.getCoursework(courseId).subscribe((param) => {
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
