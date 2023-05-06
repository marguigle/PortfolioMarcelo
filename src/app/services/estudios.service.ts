import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EstudiosService {
  URL = 'http://localhost:8080/estudios/';
  constructor(private http: HttpClient) {}

  public getEstudios(): Observable<any> {
    return this.http.get<any>(this.URL + 'traer');
  }
}
