import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = `http://localhost:5000/api`;
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses`);
  }

  getCourse(courseId): Observable<any> {
    return this.http.get(`${this.baseUrl}/course_complete/${courseId}`);
  }
}
