import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { HeaderComponent } from './components/header/header.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ActividadDocenteComponent } from './components/actividad-docente/actividad-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    HeaderComponent,
    ExperienciaLaboralComponent,
    EstudiosComponent,
    ActividadDocenteComponent,
  ],

  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
