import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _mageEnergy: EnergyType;
  static mageInstance = 0;
  
  constructor(name: string) {
    super(name);
    this._mageEnergy = 'mana';
    Mage.mageInstance += 1;
  }

  get energyType(): EnergyType {
    return this._mageEnergy;
  }

  static createdArchetypeInstances(): number {
    return this.mageInstance;
  }
}