// let originalArray = [100, 22, 330 ,40, 301, 555, 110, 221, 57];

// let evenArray = originalArray.filter(item => item % 2 == 0);
// console.log(evenArray);

// let oddArray = originalArray.filter(item => item % 2 != 0);
// console.log(oddArray);

// // let myName = "bibek hamal";
// // console.log(`My name is ${myName}.`);

// let p = 5700;
// let t = 13;
// let r = 4.5;

// let i = p*t*r/100;
// console.log('The interest rate is: ' + i + '.' )

// let myName= 'Bibek';
// let reverse = '';

// for (let i = myName.length -1; i >=0; i--) {
//     reverse += myName[i]
// }
// console.log(reverse)

// const person = new Object();
// person.firstName = "Bibek";
// person.lastName = "Hamal";
// console.log(person.firstName + person.lastName);

// const person2 = {
//     firstName: "Nini",
//     lastName: "Thing",
//     age: 25,
//     address: {
//         streetName: 'Clarence street',
//         streetNumber: 18,
//         postCode: 2141,
//         city: 'sydney'
//     }

// }
// console.log(person2.address.city);

const animal = {
  type: "Dog",
  breed: "German Sherphard",
  noOfLegs: 4,
  color: "golden",
  callSign: "bark",
  animalDescription: function () {
    return `${this.callSign} I am, ${this.type} and I am of breed: ${this.breed},. I have ${this.noOfLegs} noOfLegs. I am ${this.color} in color.`;
  },
};

console.log(animal.animalDescription());

// displaying the date//

let currentDate = new Date();
let specifiedDate = new Date("2024-08-26");
let dateFromComponents = new Date(2024, 7, 26, 14, 30, 0);
console.log(currentDate);
console.log(specifiedDate);
console.log(dateFromComponents);

let year = currentDate.getFullYear();
console.log(year);
let month = currentDate.getMonth();
console.log(month);
let hour = currentDate.getHours();
console.log(hour);

fetch("http://127.0.0.1:5500/data.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })

  .catch((error) => console.error("Error: ", error));

// destructring
let arrayNew = ["apple", "ball", "cat"];
let [a, b, c] = arrayNew;
console.log(a);
console.log(b);
console.log(c);

// shallow copy and deep copy
// this is shallow copy
let person = {
  name: "bibek",
  age: 26,
  hobbies: ["reading", "writing"],
};

let newPerson = person;
person.name = "hamal";
let person3 = person.hobbies.push("cycling");

console.log(person);
console.log(newPerson);
//this is deep copy

//reverse
let myName = "BIBEK";
let reverse = "";

for (let i = myName.length - 1; i >= 0; i--) {
  reverse += myName[i];
}
console.log(reverse);


// truthy
let isNightTime = 'a';

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
