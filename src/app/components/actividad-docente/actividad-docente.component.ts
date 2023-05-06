import { Component, OnInit } from '@angular/core';
import { ActividadDocente } from 'src/app/model/actividad-docente.model';
import { ActividadDocenteService } from 'src/app/services/actividad-docente.service';

@Component({
  selector: 'app-actividad-docente',
  templateUrl: './actividad-docente.component.html',
  styleUrls: ['./actividad-docente.component.css'],
})
export class ActividadDocenteComponent implements OnInit {
  ActividadDocente: any[] = [];

  constructor(public actividadDocenteService: ActividadDocenteService) {}

  ngOnInit(): void {
    this.actividadDocenteService
      .getActividadDocente()
      .subscribe((data: ActividadDocente[]) => {
        this.ActividadDocente = data;
      });
  }
}
