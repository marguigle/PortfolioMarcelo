export class TrabajosPresentados {
  id?: number;
  lugar: String;
  titulo: String;

  constructor(lugar: String, titulo: String) {
    this.lugar = lugar;
    this.titulo = titulo;
  }
}
