export class SoftSkills {
  id?: String;
  skill: String;
  porcentaje: String;

  constructor(skill: String, porcentaje: String) {
    this.skill = skill;
    this.porcentaje = porcentaje;
  }
}
