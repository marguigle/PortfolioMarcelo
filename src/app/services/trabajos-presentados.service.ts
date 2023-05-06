import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrabajosPresentados } from '../model/trabajos-presentados.model';

@Injectable({
  providedIn: 'root',
})
export class TrabajosPresentadosService {
  URL = 'http://localhost:8080/trabPres/';

  constructor(private http: HttpClient) {}

  public getTrabajosPres(): Observable<TrabajosPresentados[]> {
    return this.http.get<TrabajosPresentados[]>(this.URL + 'traer');
  }
}
