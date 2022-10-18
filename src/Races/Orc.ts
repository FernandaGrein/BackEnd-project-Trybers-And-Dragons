import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoinst: number; 
  static orcInstace = 0; 

  constructor(name: string, dexterity:number) {
    super(name, dexterity);
    this._maxLifePoinst = 74;
    Orc.orcInstace += 1; 
  }

  get maxLifePoints(): number {
    return this._maxLifePoinst;
  }

  static createdRacesInstances(): number {
    return this.orcInstace;
  }
}