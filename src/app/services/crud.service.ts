import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiURL;
const STUDENTS = '/api/students';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private httpClient: HttpClient) {}

  getStudents() {
    return this.httpClient.get(`${API_URL}${STUDENTS}`);
  }

  createStudent(student) {
    return this.httpClient.post(`${API_URL}${STUDENTS}`, student);
  }
}
