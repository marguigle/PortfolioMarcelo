import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SoftSkills } from '../model/softSkills.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillsService {
  URL = 'http://localhost:8080/softskills/';
  constructor(private http: HttpClient) {}

  public getSoftSkills(): Observable<SoftSkills[]> {
    return this.http.get<SoftSkills[]>(this.URL + 'traer');
  }
}
