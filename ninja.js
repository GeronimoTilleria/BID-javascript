class Ninja {
    constructor(nombre, salud, velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad || 3;
        this.fuerza = fuerza || 3;
    }

    sayName() {
        console.log(`Nombre: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}\nSalud: ${this.salud}\nVelocidad: ${this.velocidad}\nFuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10){
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        super.drinkSake();
        super.showStats();
    }
}

const sensei = new Sensei("Geronimo");
sensei.speakWisdom();
