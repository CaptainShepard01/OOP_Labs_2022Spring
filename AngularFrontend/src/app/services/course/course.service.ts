import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {map, Observable} from "rxjs";
import {Course} from "../../interfaces/Course";
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = `${environment.apiUrl}courses`;

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  deleteCourse(id: number): Observable<unknown>{
    return this.http.delete<unknown>(`${this.apiUrl}/${id}`);
  }

  addCourse(course: Course):Observable<Course>{
    return this.http.post<Course>(this.apiUrl, course, httpOptions);
  }

  updateCourse(id: number | undefined, course: Course):Observable<Course>{
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course, httpOptions);
  }
}
