"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._warriorEnergy = 'stamina';
        Warrior.warriorInstance += 1;
    }
    get energyType() {
        return this._warriorEnergy;
    }
    static createdArchetypeInstances() {
        return this.warriorInstance;
    }
}
exports.default = Warrior;
Warrior.warriorInstance = 0;
