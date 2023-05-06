export class Estudios {
  id?: number;
  fecha: String;
  lugar: String;
  tipo: String;
  titulo: String;

  constructor(fecha: String, lugar: String, tipo: String, titulo: String) {
    this.fecha = fecha;
    this.lugar = lugar;
    this.tipo = tipo;
    this.titulo = titulo;
  }
}
