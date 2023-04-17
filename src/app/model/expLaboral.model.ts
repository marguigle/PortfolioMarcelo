export class ExpLaboral {
  id?: number;
  lugar: string;
  cargo: string;
  fecha: string;
  logos: string;

  constructor(lugar: string, cargo: string, fecha: string, logos: string) {
    this.lugar = lugar;
    this.cargo = cargo;
    this.fecha = fecha;
    this.logos = logos;
  }
}
