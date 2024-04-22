import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HardSkills } from '../model/hardSkills.model';

@Injectable({
  providedIn: 'root',
})
export class HardSkillsService {
  URL = 'http://localhost:8080/hardskills/';
  constructor(private http: HttpClient) {}

  public getHardSkills(): Observable<HardSkills[]> {
    return this.http.get<HardSkills[]>(this.URL + 'traer');
  }
}
