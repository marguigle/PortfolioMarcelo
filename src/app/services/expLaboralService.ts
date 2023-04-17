import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpLaboral } from '../model/expLaboral.model';
@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URL = 'http://localhost:8080/expLaboral/';

  constructor(private http: HttpClient) {}

  public getExperiencia(): Observable<ExpLaboral[]> {
    return this.http.get<ExpLaboral[]>(this.URL + 'traer');
  }
}
