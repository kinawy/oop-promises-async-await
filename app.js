// Object Oriented Programming

const dog = {
    name: 'Barky',
    goodBoy: true,
    gender: 'girl'
};

console.log(dog);

const dogTwo = {
    name: 'Rocco',
    color: 'brown'
};

dogTwo.__proto__=dog;
console.log(dogTwo.goodBoy);

console.log(dogTwo.name);
console.log(dogTwo);

const monkey = {
    thumbs: true,
    fingers: 10,
    name: 'Bubbles',
    happy: true
}

const ape = {};

ape.__proto__= monkey;

console.log(ape);

ape.fingers = 20;
console.log(ape.fingers);
console.log(monkey.fingers);

// Constructor Functions

function User (name) {

    this.name = name;
    // return this;

}

let adam = new User('Adam');
let pete = new User('Pete')

console.log(adam)
console.log(pete.name);

function NBAPlayer (name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);

function DogCreator (name, type, gender) {

    this.name = name;
    this.type = type;
    this.gender = gender;
}

let arf = new DogCreator('Arf', 'Pekanese', 'Male');
let bone = new DogCreator('Bone', 'Pitbull', 'Male');
let sparky = new DogCreator('Sparky', 'Golden Retriever', 'Female');

console.log(arf)
console.log(bone)
console.log(sparky)



