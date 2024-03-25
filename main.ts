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

let guests: string[] = ["Ali", "Abdul", "Raheem", "Omair", "Rehman"];

// Previous Question We have invited the Guests
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Guest who can't make it
let cantMakeit = guests.pop();
console.log(`\nSorry The Guest " ${cantMakeit} " unable to reached\n`);
// New guest invitation
const newGuest = "Noor";
guests.push(newGuest);

// Print updated invitation message for each guest
guests.forEach((guest) => {
  console.log(`Dear ${guest}, you are invited to dinner.`);
});
