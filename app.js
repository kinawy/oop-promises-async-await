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

dogTwo.__proto__ = dog;
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

ape.__proto__ = monkey;

console.log(ape);

ape.fingers = 20;
console.log(ape.fingers);
console.log(monkey.fingers);

// Constructor Functions

function User(name) {

    this.name = name;
    // return this;

}

let adam = new User('Adam');
let pete = new User('Pete')

console.log(adam)
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
    this.intro = function () {
        console.log("Hi, my name is " + this.name)
    }
    this.intro();
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);

function DogCreator(name, type, gender) {

    this.name = name;
    this.type = type;
    this.gender = gender;
}

let arf = new DogCreator('Arf', 'Pekanese', 'Male');
let bone = new DogCreator('Bone', 'Pitbull', 'Male');
let sparky = new DogCreator('Sparky', 'Golden Retriever', 'Female');

console.log(arf);
console.log(bone);
console.log(sparky);

// CLass

class Car {
    constructor(name, make, model, color, year) {
        this.name = name;
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log('Vroom')
    }
    intro() {
        console.log(`This car is a ${this.name} ${this.make} ${this.model} that is ${this.color} and was made in ${this.year}.`)
    }
}

let ford = new Car('Ford', 'Mustang', 'GT Sport', 'red', 1969);

console.log(ford);
ford.drive();
ford.intro();
// A class is an easy way of making multiple of something, objects
class GitHubProfile {
    // constructor is a function that creates the class
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    // You can call functions inside, not sure why yet
    intro() {
        console.log(`My name is ${this.name}, and my username is ${this.username}. Check me out at ${this.url}.`)
    }
}

// Fetching from my github
fetch('https://api.github.com/users/kinawy')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let url = data.url;
        let login = data.login;
        let type = data.type;
        let sameh = new GitHubProfile(type, login, url);
        sameh.intro();
        console.log(sameh);

    })
