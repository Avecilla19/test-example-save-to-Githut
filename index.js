const input = require(`readline-sync`);

let name = input.question("Enter your first name: ");
let otherName = input.question("Enter your last name: ");
console.log("Hello, " + name + otherName+ "!");
console.log(name + otherName );
