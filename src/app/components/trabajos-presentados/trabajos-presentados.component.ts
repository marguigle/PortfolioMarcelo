import { Component, OnInit } from '@angular/core';
import { TrabajosPresentados } from 'src/app/model/trabajos-presentados.model';
import { TrabajosPresentadosService } from 'src/app/services/trabajos-presentados.service';

@Component({
  selector: 'app-trabajos-presentados',
  templateUrl: './trabajos-presentados.component.html',
  styleUrls: ['./trabajos-presentados.component.css'],
})
export class TrabajosPresentadosComponent implements OnInit {
  trabajosPresentados: TrabajosPresentados[] | null = null;

  constructor(public trabajosPresentadosService: TrabajosPresentadosService) {}

  ngOnInit(): void {
    this.trabajosPresentadosService
      .getTrabajosPres()
      .subscribe((data: TrabajosPresentados[]) => {
        this.trabajosPresentados = data;
      });
  }
}
