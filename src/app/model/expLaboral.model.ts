export class ExpLaboral {
  id?: number;
  lugar: string;
  cargo: string;
  fecha: string;
  logo: string;

  constructor(lugar: string, cargo: string, fecha: string, logo: string) {
    this.lugar = lugar;
    this.cargo = cargo;
    this.fecha = fecha;
    this.logo = logo;
  }
}
