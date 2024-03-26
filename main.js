/* =======>>>>>> Assignment 1 <<<<<======== */
/* Install [Node.js](https://nodejs.org/en/),
[TypeScript](https://www.typescriptlang.org/download) and
[VS Code](https://code.visualstudio.com/) on your computer. */
// console.log("Hello World");
// console.log("Installation Done");
/* =======>>>>>> Assignment 2 <<<<<======== */
/* Personal Message */
// let personName: string = "Hamdan";
// console.log(
//   `“Hello ${personName} would you like to learn some Python/Typescript today?”`
// );
/* =======>>>>>> Assignment 3 <<<<<======== */
/* Name Cases;( LowerCase, UpperCase, TitleCase ) */ // Date 24-march-24
// let personName: string = "hAmDan";
// console.log(personName.toLowerCase()); //  lowerCase
// console.log(personName.toUpperCase()); //  UPPERCASE
// let titleCase =
//   personName.charAt(0).toUpperCase() + personName.toLowerCase().slice(1);
// console.log(titleCase); // Titlecase
/* =======>>>>>> Assignment 4 <<<<<======== */
/* Famous Quote */
// console.log(
//   `Thomas Edison once said, "Our greatest weakness lies in giving up.The most certain way to succeed is always to try just one more time" `
// );
/* =======>>>>>> Assignment 5 <<<<<======== */
/* Famous Quote 2 */
// let famous_Person: string = "Thomas Edison";
// let message: string = `once said, "Our greatest weakness lies in giving up.The most certain way to succeed is always to try just one more time."`;
// console.log(`${famous_Person} ${message}`);
/* =======>>>>>> Assignment 6 <<<<<======== */
/* Stripping Name */ // Date 24-march-24
// let personName: string = "\t Hamdan Bhatti \n";
// console.log(`Name with WhiteSpaces: ${personName}`);
// let strippedName = personName.trim();
// console.log(`Name without WhiteSpaces:${strippedName}`);
/* =======>>>>>> Assignment 7 <<<<<======== */
/* Number Eight*/
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
/* =======>>>>>> Assignment 8 <<<<<======== */
/* Creating Lines b/w console */
// console.log(5 + 3);
// console.log("-".repeat(5));
// console.log(10 - 2);
// console.log("-".repeat(5));
// console.log(4 * 2);
// console.log("-".repeat(5));
// console.log(16 / 2);
// console.log("-".repeat(5));
/* =======>>>>>> Assignment 9 <<<<<======== */
/* Favorite Number */
// let favNum: number = 9;
// console.log(`My Favorite number is ${favNum}`);
/* =======>>>>>> Assignment 10 <<<<<======== */
/*Adding Comments */
// I created two program.One is describing the lowercase upper case and TitleCase
// And the other program is to describing stripping names
// Program #1 =========>>>
/* Name Cases;( LowerCase, UpperCase, TitleCase ) */ // Date 24-march-24 M.Hamdan
// let personName: string = "hAmDan";
// console.log(personName.toLowerCase()); //  lowerCase
// console.log(personName.toUpperCase()); //  UPPERCASE
// let titleCase =
//   personName.charAt(0).toUpperCase() + personName.toLowerCase().slice(1);
// console.log(titleCase); // Titlecase
// Program #2 ========>
/* Stripping Name */ // Date 24-march-24 M.Hamdan
// let personName: string = "\t Hamdan Bhatti \n";
// console.log(`Name with WhiteSpaces: ${personName}`);
// let strippedName = personName.trim();
// console.log(`Name without WhiteSpaces:${strippedName}`);
/* =======>>>>>> Assignment 11 <<<<<======== */
/* Names */
// let myFriends: string[] = ["ali", "abdul", "raheem", "omair"];
// for (let friend of myFriends) {
//   console.log(friend);
// }
/* =======>>>>>> Assignment 12 <<<<<======== */
/* Greetings */
// let message: string = "Would You like to go for a trip.\n";
// let myFriends: string[] = ["Ali", "Abdul", "Raheem", "Omair"];
// for (let friend of myFriends) {
//   console.log(`${friend}, ${message}`);
// }
/* =======>>>>>> Assignment 13 <<<<<======== */
/* Your Own Array */
// let modeOFTransport: string[] = ["Bike", "Car", "Bus", "Train"];
// for (let transport of modeOFTransport) {
//   console.log(`I would like to own a ${transport}`);
// }
/* =======>>>>>> Assignment 14 <<<<<======== */
/* Guest List */
// let guests: string[] = ["Ali", "Abdul", "Raheem"];
// for (let guestName of guests) {
//   console.log(`${guestName}, Please come to dinner.`);
// }
/* =======>>>>>> Assignment 15 <<<<<======== */
/* Changing Guest List: */
// let guests: string[] = ["Ali", "Abdul", "Raheem", "Omair", "Rehman"];
// // Previous Question We have invited the Guests
// guests.forEach((guest) => {
//   console.log(`Dear ${guest}, you are invited to dinner.`);
// });
// // Guest who can't make it
// let cantMakeit = guests.pop();
// console.log(`\nSorry The Guest " ${cantMakeit} " unable to reached\n`);
// // New guest invitation
// const newGuest = "Noor";
// guests.push(newGuest);
// // Print updated invitation message for each guest
// guests.forEach((guest) => {
//   console.log(`Dear ${guest}, you are invited to dinner.`);
// });
/* =======>>>>>> Assignment 16 <<<<<======== */
/*More Guests */
// Starting from Ex 15 We Have a Guest list
// let guests: string[] = ["Ali", "Abdul", "Raheem", "Omair", "Noor"];
// for (let guest of guests) {
//   console.log(`Hey ${guest} ! We have found a Bigger Dinner Table`);
// }
// // Adding One New Guest to the beginning of Array
// guests.unshift("Mehar");
// // Adding one new guest to the middle of the array
// guests.splice(Math.floor(6 / 2), 0, "Akram");
// // Adding New Guest at the End of the List
// guests.push("Fazal");
// // Print updated invitation message for each guest
// guests.forEach((guest) => {
//   console.log(`Dear ${guest}, you are invited to dinner.`);
// });
// console.log(guests);
/* =======>>>>>> Assignment 17 <<<<<======== */
/* Shrinking Guest List */
// So from Ex 16 We have a Updated Guest List
// let guests: string[] = [
//   "Mehar",
//   "Ali",
//   "Abdul",
//   "Akram",
//   "Raheem",
//   "Omair",
//   "Noor",
//   "Fazal",
// ];
// console.log(
//   "You can invite only two people for dinner because table have only two people space."
// );
// while (guests.length > 2) {
//   let removedGuest = guests.pop();
//   console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`);
// }
// for (let remainingGuest of guests) {
//   console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
// }
// guests.splice(0, 2); // Remove the last two names from the list
// console.log("Final guest list:", guests);
/* =======>>>>>> Assignment 18 <<<<<======== */
// let placesToVisit: string[] = [
//   "Hunza Valley",
//   "Skardu",
//   "Naran and Kaghan Valley",
//   "Swat Valley",
//   "Murree"
// ];
// // Print the array in its original order
// console.log("Original order:", placesToVisit);
// // Print the array in alphabetical order without modifying the original list
// console.log("Alphabetical order:", [...placesToVisit].sort());
// // Print to show the array is still in its original order
// console.log("Original order:", placesToVisit);
// // Print the array in reverse alphabetical order without changing the original list
// console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// // Print to show the array is still in its original order
// console.log("Original order:", placesToVisit);
// // Reverse the order of the list and print it
// placesToVisit.reverse();
// console.log("Reversed order:", placesToVisit);
// // Reverse the order of the list again to get back to the original order
// placesToVisit.reverse();
// console.log("Back to original order:", placesToVisit);
// // Sort the array in alphabetical order and print it
// placesToVisit.sort();
// console.log("Sorted in alphabetical order:", placesToVisit);
// // Sort the array in reverse alphabetical order and print it
// placesToVisit.sort().reverse();
// console.log("Sorted in Reverse Alphabetical order ", placesToVisit);
/* =======>>>>>> Assignment 19 <<<<<======== */
/*Dinner Guests */
// let guests: string[] = ["Ali", "Abdul", "Raheem", "Noor"];
// console.log(`Number of people invited to dinner: ${guests.length}`);
/* =======>>>>>> Assignment 20 <<<<<======== */
/* Thinking of array containing list of something You Like */
// let countries: string[] = ["USA", "Canada", "France", "Japan", "Brazil"];
// countries.forEach((country) => {
//   console.log(country);
// });
/* =======>>>>>> Assignment 21 <<<<<======== */
// They think of something you could store in a TypeScript Object. Write a program that creates
// Objects containing these items.
// let items: object = {
//   name: "Hamdan",
//   age: 18,
//   gender: "male",
//   status: "single",
// };
// console.log(items);
/* =======>>>>>> Assignment 22 <<<<<======== */
// Create an array of countries
// const countries: string[] = [
//   "Pakistan",
//   "India",
//   "Turkey",
//   "Australia",
//   "Canada",
// ];
// console.log(countries[10]); // This will produce an error
// // Correcting the error
// if (countries.length > 10) {
//   console.log(countries[10]); // This will not produce an error
// } else {
//   console.log("Index is out of bounds.");
// }
/* =======>>>>>> Assignment 23 <<<<<======== */
/* Write a series of conditional tests */
// let number = 10;
// console.log("Is number == 10? I predict True.");
// console.log(number == 10);
// console.log("Is number === '10'? I predict False.");
// console.log(number !== 10);
// console.log("Is number > 5? I predict True.");
// console.log(number > 5);
// console.log("Is number < 0? I predict False.");
// console.log(number < 0);
// console.log("Is number >= 10? I predict True.");
// console.log(number >= 10);
// console.log("Is number <= 5? I predict False.");
// console.log(number <= 5);
// let name = "Alice";
// console.log("Is name === 'Alice'? I predict True.");
// console.log(name === "Alice");
// console.log("Is name !== 'Bob'? I predict True.");
// console.log(name !== "Bob");
// console.log("Is name.includes('lic')? I predict True.");
// console.log(name.includes("lic"));
// console.log("Is name.startsWith('A')? I predict True.");
// console.log(name.startsWith("A"));
/* =======>>>>>> Assignment 24 <<<<<======== */
// Tests for equality and inequality with strings
// let fruit = 'apple';
// console.log("Is fruit equal to 'apple'? I predict True.");
// console.log(fruit === 'apple');
// console.log("Is fruit not equal to 'banana'? I predict True.");
// console.log(fruit !== 'banana');
// // Tests using the lower case function
// let city = 'New York';
// console.log("Is city in lowercase equal to 'new york'? I predict True.");
// console.log(city.toLowerCase() === 'new york');
// // Numerical tests
// let x = 5;
// let y = 10;
// console.log("Is x less than y? I predict True.");
// console.log(x < y);
// console.log("Is x greater than or equal to 3? I predict True.");
// console.log(x >= 3);
// // Tests using "and" and "or" operators
// let isSunny = true;
// let isWarm = true;
// console.log("Is it sunny and warm? I predict True.");
// console.log(isSunny && isWarm);
// console.log("Is it sunny but not warm? I predict False.");
// console.log(isSunny && !isWarm);
// // Test whether an item is in an array
// let colors = ['red', 'blue', 'green'];
// console.log("Is 'blue' in the colors array? I predict True.");
// console.log(colors.includes('blue'));
// // Test whether an item is not in an array
// console.log("Is 'yellow' not in the colors array? I predict True.");
// console.log(!colors.includes('yellow'));
/* =======>>>>>> Assignment 25 <<<<<======== */
// let alien_color: string = "green";
// /* Alien Colors #1 */
// if (alien_color === "green") {
//   console.log("Player just earned 5 points.\n");
// }
// // Version that failed
// alien_color = "red";
// if (alien_color === "green") {
//   console.log("Player just earned 5 points.");
// }
/* =======>>>>>> Assignment 26 <<<<<======== */
/* Alien Colors #2: */
// let alien_color: string = "green";
// if (alien_color === "green") {
//   console.log("Player just earned 5 points.\n");
// } else {
//   console.log("Player Just earned 10 points");
// }
/* =======>>>>>> Assignment 27 <<<<<======== */
// let alien_color: string = "green";
// // 1st Version
// if (alien_color === "green") {
//   console.log("The player earned 5 points.");
// } else if (alien_color === "yellow") {
//   console.log("The player earned 10 points.");
// } else if (alien_color === "red") {
//   console.log("The player earned 15 points.");
// }
// // 2nd Version
// alien_color = "red";
// if (alien_color === "green") {
//   console.log("The player earned 5 points.");
// } else if (alien_color === "yellow") {
//   console.log("The player earned 10 points.");
// } else if (alien_color === "red") {
//   console.log("The player earned 15 points.");
// }
// // 3rd Version
// alien_color = "yellow";
// if (alien_color === "green") {
//   console.log("The player earned 5 points.");
// } else if (alien_color === "yellow") {
//   console.log("The player earned 10 points.");
// } else if (alien_color === "red") {
//   console.log("The player earned 15 points.");
// }
/* =======>>>>>> Assignment 28 <<<<<======== */
/* Stages of Life: */
let age = 10;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
export {};
