export class ExpLaboral {
  id?: number;
  lugar: String;
  cargo: String;
  fecha: String;
  logo: String;

  constructor(lugar: String, cargo: String, fecha: String, logo: String) {
    this.lugar = lugar;
    this.cargo = cargo;
    this.fecha = fecha;
    this.logo = logo;
  }
}
