import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesApiUrl: string = 'http://localhost:3100/api/courses'

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesApiUrl);
  }

  retrieveById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesApiUrl}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.coursesApiUrl}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.coursesApiUrl}`, course);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.coursesApiUrl}/${id}`);
  }
}
