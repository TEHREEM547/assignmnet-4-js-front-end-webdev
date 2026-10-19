
    let firstName = "sabiha";
let lastName = "nizami";

let fullName = firstName + " " + lastName;

console.log(fullName);
let num1 = 20;
let num2 = 10;
let num3 = 5;
  
console.log("Addition:", num1 + num2 + num3);
console.log("Subtraction:", num1 - num2 - num3);
console.log("Multiplication:", num1 * num2 * num3)
console.log("Division:", num1 / num2 / num3);

 let temperature = Number(prompt("Enter temperature:"));

if (temperature <= 0) {
    console.log("Freezing");
} else {
    console.log("Not freezing");
}


let age = Number(prompt("Enter your age:"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else if (age >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}



let units = Number(prompt("Enter electricity units:"));
let bill;

if (units <= 100) {
    bill = units * 10;
} else if (units <= 200) {
    bill = 100 * 10 + (units - 100) * 15;
} else {
    bill = 100 * 10 + 100 * 15 + (units - 200) * 20;
}

console.log("Electricity Bill: Rs. " + bill);


let color = prompt("Enter traffic light color:");

if (color.toLowerCase() === "red") {
    console.log("Stop");
} else if (color.toLowerCase() === "yellow") {
    console.log("Ready");
} else if (color.toLowerCase() === "green") {
    console.log("Go");
} else {
    console.log("Invalid Color");
}

let pocketMoney = Number(prompt("Enter pocket money:"));

if (pocketMoney > 500) {
    console.log("You can buy a gift");
} else {
    console.log("Save your money");
}


let shoppingAmount = Number(prompt("Enter shopping amount:"));

if (shoppingAmount >= 2000) {
    console.log("Free Delivery");
} else {
    console.log("Delivery Charges Apply");
}


