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



