
//let's say we wanted to create a Chimera object.
class Lion {
    roar() {
        console.log("roar");
    }
};

class Goat {
    kick() {
        console.log("kick");
    }
};

class Lizard {
    tail = true;
};


let myLion = new Lion();
let myGoat = new Goat();
let myLizard = new Lizard();
myLion.roar();
myGoat.kick();
console.log(myLizard.tail);

//IF I want to build a Chme which is a combination
//of Lion, goat, and lizard...I could do it with
//inheritance...
class LionGoat extends Goat {
    roar() { console.log("roar"); }
}

class Chimera extends LionGoat {
    tail = true;
}

let myChimera = new Chimera();
myChimera.roar();
myChimera.kick();
console.log(myChimera.tail);

//Not appropriate to use inheritance here...
//or even classes..
let lion = {
    roar: function() {console.log('roar'); }
};
let goat = {
    kick: function() {console.log('kick'); }
};
let lizard = {
    tail: true
};

let chimera = {};
Object.assign(chimera, lion);
chimera.roar();
console.log(chimera);
Object.assign(chimera, goat);
chimera.roar();
chimera.kick();
Object.assign(chimera, lizard);
console.log(chimera);


let chimera2 = Object.assign({}, lion, goat, lizard);
console.log(chimera2);