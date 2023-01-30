import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { personaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  persona: persona = new persona('', '', '', '', '', '', '', '', '');
  constructor(public personaService: personaService) {}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
  }
}
