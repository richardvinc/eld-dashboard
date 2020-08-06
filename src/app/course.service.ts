import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = `http://localhost:5000/api`;
  constructor(private http: HttpClient, private us: UserService) {}

  getCourses(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.us
        .getUser()
        .then((token) => {
          const header = new HttpHeaders().set(
            'Authorization',
            'Bearer ' + token
          );
          resolve(
            this.http.get(`${this.baseUrl}/courses`, { headers: header })
          );
        })
        .catch((err) => {
          reject(err);
          // this.us.login();
        });
    });
  }

  getCourse(courseId): Observable<any> {
    return this.http.get(`${this.baseUrl}/course/${courseId}`);
  }

  getTeacher(courseId): Observable<any> {
    return this.http.get(`${this.baseUrl}/teacher/${courseId}`);
  }

  getStudent(courseId): Observable<any> {
    return this.http.get(`${this.baseUrl}/student/${courseId}`);
  }

  getCoursework(courseId): Observable<any> {
    return this.http.get(`${this.baseUrl}/coursework/${courseId}`);
  }
}
