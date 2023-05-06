import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios.model';
import { EstudiosService } from 'src/app/services/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  estudios: Estudios[] | null = null;

  constructor(public estudiosService: EstudiosService) {}

  ngOnInit(): void {
    this.estudiosService.getEstudios().subscribe((data: Estudios[]) => {
      this.estudios = data;
    });
  }
}
