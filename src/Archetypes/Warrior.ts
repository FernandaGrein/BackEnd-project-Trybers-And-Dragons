import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _warriorEnergy: EnergyType;
  static warriorInstance = 0;

  constructor(name: string) {
    super(name);
    this._warriorEnergy = 'stamina';
    Warrior.warriorInstance += 1;
  }

  get energyType(): EnergyType {
    return this._warriorEnergy;    
  }

  static createdArchetypeInstances(): number {
    return this.warriorInstance;
  }
}