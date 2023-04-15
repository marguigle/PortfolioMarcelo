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
  experiencias: ExpLaboral = new ExpLaboral('', '', '', '');

  constructor(public experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    this.experienciaService.getExperiencia().subscribe((data: any) => {
      this.experiencias = data[0];
      console.log(data);
    });
  }
}
