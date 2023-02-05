//alert("Hello, SDA!");

console.log("I may be a front-end developer");

var fullName = "Mickey Mouse"; //ei soovitata enam kasutada
console.log(fullName.length);
console.log(fullName);
let locationCity = "Tallinn"; //let on sama mis var, aga soovitatakse kasutada seda

const ZIPCODE = "51004"; //cant' change the value, capital letters

//location = "Tartu";

let isActive = true; //boolean variable
let age = 32;

let salary = 4500.0;

// Data comparison
// == compares values
// === compares values and types

let a = "5";
let b = 5;

if(a == b) {
    console.log("A is same value as B"); //value comparison
} else if(a === b) {
    console.log("A is same value and type as B"); //value and type comparison
}

//only conventional for loop, not inhanced
// while and do-while, switch

// Arrays
let arrayfruit = ["apple", "orange", "mango"];
console.log(arrayfruit);

arrayfruit.pop(); //removes the last element of the array
console.log(arrayfruit);
arrayfruit.push("banana");
console.log(arrayfruit);

//Objects JSON (Javascript Object Notation)
let student = {
    "name": "Mickey Mouse",
    "age": 20,
    "address": {
        "street": "Ducky alley",
        "city": "Disneyland",
        "zipcode": "8434049"
    },
    "joindate": "2022-01.02",
    "active": true,
    "grade": 4.5
}
console.log(student);
console.log(student.name);
console.log(student.address);
console.log(student.address.city);
console.log(Object.keys(student)); // all properties of student

//Array of JSON or JSON array
let students = [

    {
        "name": "Mickey Mouse",
        "age": 20,
        "address": {
            "street": "Ducky alley",
            "city": "Disneyland",
            "zipcode": "8434049"
        },
        "joindate": "2022-01.02",
        "active": true,
        "grade": 4.5
    },
     {
        "name": "Donald Duck",
        "age": 20,
        "address": {
            "street": "Ducky alley",
            "city": "Disneyland",
            "zipcode": "8434049"
        },
        "joindate": "2022-01.02",
        "active": true,
        "grade": 4.5
    }
];
console.log(students);
console.log(students[1]);
console.log(students[0].joindate);
students.forEach(s => console.log(s.name)); //ES6 uuendus

//Functions
//keyword function, they haven't any return type
function isStudentPassed (student) {
    return student.grade > 3.5;
}

let studentPassResult = isStudentPassed(student);
console.log(student.name + "'s result: " +studentPassResult);

//Accessing HTML
// get the element by id
let image = document.getElementById("image block");
image.innerHTML = "<h2>Hello<h2/>"
console.log(image);

let liTags = document.getElementsByTagName("li");
console.log(liTags);

//Binding events
function showMeAlert () {
    alert("Contact me for emergency");
}

function showAlert() {
    alert("This field is mandatory to be filled!");
}

//ES6 JS
//Arrow functions
const isStudentPassed2 = (student) => {return student.grade > 3.5};
isStudentPassed2(student);

//TypeScript
//Browser cannot understand Typescript
//we need external tools
//All Javascript is valid Typescript
// we have files with .ts extension
// External tool Js framework - Angular


















