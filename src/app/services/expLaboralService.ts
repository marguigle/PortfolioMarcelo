import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URL = 'http://localhost:8080/expLaboral/';

  constructor(private http: HttpClient) {}

  public getExperiencia(): Observable<any> {
    return this.http.get<any>(this.URL + 'traer');
  }
}
