export class ActividadDocente {
  id?: number;
  titulo: String;
  lugar: String;

  constructor(titulo: String, lugar: String) {
    this.titulo = titulo;
    this.lugar = lugar;
  }
}
