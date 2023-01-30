export class persona {
  id?: number;
  nombre: String;
  titulo1: String;
  titulo2: String;
  fechaNacimiento: String;
  nacionalidad: String;
  telefono: String;
  mail: String;
  acercaDe: String;
  img: String;

  constructor(
    nombre: String,
    titulo1: String,
    titulo2: String,
    fechaNacimiento: String,
    nacionalidad: String,
    telefono: String,
    mail: String,
    acercaDe: String,
    img: String
  ) {
    this.nombre = nombre;
    this.titulo1 = titulo1;
    this.titulo2 = titulo2;
    this.fechaNacimiento = fechaNacimiento;
    this.nacionalidad = nacionalidad;
    this.telefono = telefono;
    this.mail = mail;
    this.acercaDe = acercaDe;
    this.img = img;
  }
}
