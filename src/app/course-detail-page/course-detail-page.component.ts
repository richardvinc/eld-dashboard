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
  course;

  constructor(private route: ActivatedRoute, private cs: CourseService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.courseId = param.get('courseId');
      this.getCourse(this.courseId);
    });
  }

  getCourse(courseId): void {
    this.cs.getCourse(courseId).subscribe((course) => {
      this.course = course;
      console.log(course);
    });
  }
}
