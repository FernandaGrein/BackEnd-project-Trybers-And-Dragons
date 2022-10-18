import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _rangerEnergy: EnergyType;
  static rangerInstance = 0;

  constructor(name: string) {
    super(name);
    this._rangerEnergy = 'stamina';
    Ranger.rangerInstance += 1;
  }

  get energyType(): EnergyType {
    return this._rangerEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.rangerInstance;
  }
}