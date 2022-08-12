

/*
    Understanding “let” and “const”
    Arrow functions
    Template literals
    Classes
    Class inheritance
    Destructuring arrays and objects
    Promises
    Async/Await

    Modules
    Fetch
    Array functions
*/

// // Bad
// "use strict";
// var name = "erik"; // 🚫 don't use var, makes your code more error prone


// // Better (favor it)
// const luckyNumber = 777; // assignment
// // luckyNumber = 555; // re-assignment (won't work with const)

// // Better (if you need to do re-assignment only then use let)
// let age = 5; // assignment
// age = 8; // re-assignment



// if (true) {
//     // Block
//     const state = "California";

//     city = "new york";
// }

// console.log("the city", city)

// for(let i = 0; i < 10; i++) {
//     // block
// }

// function jump() {
//     // block
// }

// {
//     // block
//     let x = 5;

//     {
//         console.log(x) // 5
//     }
// }



// function runStatement() {
//     console.log("run statement ");
// }
// runStatement();


// const runExpression = () => {
//     console.log("run expression ");
// }

// runExpression();


const person = {
    name: "erik",
    walk: () => {
        // arrow function has no this context
        console.log(this); // this refers to outer object (Window object)
        console.log(this.name, "is walking")
    },
    flip: function () {
        // function does have a this context
        console.log(this); // this refers to the person object
        console.log(this.name, "is flipping")
    }
}

// // console.log(person)

person.walk();
person.flip();



// const firstName = "erik";
// const lastName = "montes";


// const sentence = firstName + " " + lastName + " is " + (2 * 25) + " years old!";

// // Template literals
// const sentence2 = `${firstName[0]} ${lastName} is ${2 * 25} years old!`

// console.log(sentence)
// console.log(sentence2)


class Bear {

    constructor(name, age) {
        // will run when you create an instance of it

        this.name = name;
        this.age = age;
    }

    run() {
        console.log(`${this.name} run`)
    }

    walk() {
        console.log(`${this.name} Walk`)
    }

    climb() {
        console.log(`${this.name} climb`)
    }
}

// extends is the keyword to "inherit" the parent class methods and properties
// in this example PolarBear  will basically get all Bear's functionality
class PolarBear extends Bear {
    constructor(name, age) {
        super(name, age); // execute parent Class constructor() with arguments

        console.log("after the Bear's logic")
    }

    walk() {
        super.walk(); // execute parent class walk method
        // and in addition do some more stuff

        console.log("and stopping to rest here and there....")
    }
    // adding an extra method that the parent class doesn't have
    swim() {
        console.log(`${this.name} swim`)
    }

    climb() {
        // Fully override (don't call super.climb())
        console.log(`${this.name} has failed to climb :(`)
    }
}

const yogi = new Bear("Yogi", 55);

yogi.run();
yogi.walk();
yogi.climb();

const smokey = new Bear("Smokey", 20);
smokey.walk();
smokey.climb();
// smokey.swim(); // will not work since smokey is an instance of Bear, not PolarBear so don't have access to swim method

const coke = new PolarBear("Coke", 544);
coke.walk();
coke.climb();
coke.swim();

// Prototypal inheritance (old school of doing classes)
// function Bear(n, a) {
//     this.name = n;
//     this.age = a;
// }

// Bear.prototype.walk = function () {
//     console.log(`${this.name} Walk`)
// }

// Bear.prototype.climb = function () {
//     console.log(`${this.name} climb`)
// }

// const teddy = new Bear("Ted", 23);

// teddy.walk();


// const colors = ["red", "green", "blue"];

// // Destructuring
// const [,favcolor, ...theRestofTheColors] = colors;

// // console.log(favoriteColor)
// console.log(favcolor)
// console.log(theRestofTheColors);

// const person2 = {
//     name: "john",
//     age: 32,
//     city: "NYC"
// };

// const { city: town, age: personAge } = person2;

// console.log(personAge)
// console.log(town)


// 1. Creating the promise
// new Promise() (most time you won't do this)

const returnHome = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // run some code after 2 seconds
            // resolve("heck yes!")
            reject("whooops!")

        }, 2000)
    });
}

// 2. Consuming the promise
    // 1. .then() .catch()
    // 2. async/await

// then / catch chaining
// returnHome().then((msg) => {
//     console.log(`The message is ${msg}`)
// }).catch((sadlfjsdalk) => {
//     console.log("Failed ", sadlfjsdalk)
// });


// async function start() {

//     try {
//         const msg = await returnHome()

//         console.log(msg)

//     } catch (err) {

//         console.log(err)
//     }


//     console.log("All done!")
// }

// start(); // execute



// console.log("Reached end of file");


// Fetch returns a promise, so we just need to consume it
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


//   async function getData() {

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

//         const data = await response.json();

//         console.log(data)
//     } catch (e) {

//         console.log(e)

//     }


//   }


//   getData();


// function square(n) {
//     return n * n;
// }

// function cube(n) {
//     return n * n * n;
// }

// function oddOrEven(n) {

//     if (n % 2 === 0) {
//         return "even"
//     }

//     return "odd";
// }

// console.log(oddOrEven(99))

// const x = 10;

// console.log(square(10))


// const nums = [1, 3, 5, 3, 6, 6, 5];

// console.log(nums);

// const results =  nums.map(oddOrEven);

// console.log(results)




