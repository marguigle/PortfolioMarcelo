import { Component, OnInit } from '@angular/core';
import { ExpLaboral } from 'src/app/model/expLaboral.model';
import { ExperienciaService } from 'src/app/services/expLaboralService';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
  providers: [ExperienciaService],
})
export class ExperienciaLaboralComponent implements OnInit {
  experiencias: ExpLaboral[] = [];

  constructor(public experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe((data) => {
      this.experiencias = data; // asignar el arreglo a experiencias
      console.log(this.experiencias);
      console.log(data);
    });
  }
}
