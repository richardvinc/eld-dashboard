import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = `http://localhost:5000/api`;
  constructor(private http: HttpClient) {}

  getCourses(token): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.baseUrl}/courses`, { headers: header });
  }

  getCourse(token, courseId): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.baseUrl}/course/${courseId}`, {
      headers: header,
    });
  }

  getTeacher(token, courseId): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.baseUrl}/teacher/${courseId}`, {
      headers: header,
    });
  }

  getStudent(token, courseId): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.baseUrl}/student/${courseId}`, {
      headers: header,
    });
  }

  getCoursework(token, courseId): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.baseUrl}/coursework/${courseId}`, {
      headers: header,
    });
  }

  getCourseworkByDay(token, day, getAll): Observable<any> {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.baseUrl}/courseworkbyday/${day}/${getAll}`, {
      headers: header,
    });
  }
}
