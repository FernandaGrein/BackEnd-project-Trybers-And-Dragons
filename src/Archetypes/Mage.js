"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._mageEnergy = 'mana';
        Mage.mageInstance += 1;
    }
    get energyType() {
        return this._mageEnergy;
    }
    static createdArchetypeInstances() {
        return this.mageInstance;
    }
}
exports.default = Mage;
Mage.mageInstance = 0;
