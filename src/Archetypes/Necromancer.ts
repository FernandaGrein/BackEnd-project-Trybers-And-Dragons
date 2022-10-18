import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _necromancerEnergy: EnergyType;
  static necromancerInstance = 0;
  constructor(name: string) {
    super(name);
    this._necromancerEnergy = 'mana';
    Necromancer.necromancerInstance += 1;
  }

  get energyType(): EnergyType {
    return this._necromancerEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.necromancerInstance;
  }
}