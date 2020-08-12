import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() course;

  constructor() {}

  ngOnInit(): void {}

  cleanNama(teachers: string): string {
    const teachersArray = teachers.split(',');
    const param = teachersArray.map((teacher) => {
      return teacher.replace('@kwikkiangie.ac.id', '');
    });
    return param.join(', ');
  }
}
