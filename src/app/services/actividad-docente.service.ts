import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActividadDocente } from '../model/actividad-docente.model';

@Injectable({
  providedIn: 'root',
})
export class ActividadDocenteService {
  URL = 'http://localhost:8080/actdocente/';

  constructor(private http: HttpClient) {}

  public getActividadDocente(): Observable<ActividadDocente[]> {
    return this.http.get<ActividadDocente[]>(this.URL + 'traer');
  }
}
