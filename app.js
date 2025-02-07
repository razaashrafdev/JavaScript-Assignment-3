let num1 = +prompt("Enter number 1")
let opt = prompt("Enter Operator")
let num2 = +prompt("Enter number 2")


if (opt == "+") {
    console.log(num1 + num2)
} else if (opt == "-") {
    console.log(num1 - num2)
} else if (opt == "*") {
    console.log(num1 * num2)
} else if (opt == "/"){
    console.log(num1 / num2)
} else if (opt == "%"){
    console.log(num1 % num2)
}


// let exp = prompt("enter your exp")
// let js = prompt("Do you know JS?")
// let city = prompt("enter your City")
// let eSalary = prompt("enter your Expacted Salary")


// if(exp >= 2 && js == "yes" && city == "Karachi" && eSalary == "100000"){
//     console.log("you're Hired!")
// }else{
//     console.log("you're Fired!")
//     console.log(exp <= 2 && js == "No" && city != "Karachi" && eSalary >= "100000")
// }


let city = prompt("enter your City")

if(city == "karachi"){
        console.log("Welcome to city of lights")
} else {
        console.log("welcome")
}


let gender = prompt("Enter your gender")

if(gender == "male"){
        console.log("Good Morning Sir")
} else {
    console.log("Good Morning Ma'am")
}


let signal = prompt("Enter a color of signal")

if(signal == "red"){
        console.log("Must Stop")
} else if (signal == "yellow"){
    console.log("Ready to Move")
} else (signal == "green")
        console.log("Move Now")


let fule = prompt("Enter remaning fule in car(in liters)")

if(fule == "0.25 liter"){
        console.log("Please refill the fule in car")
} else {
        console.log("Ok good")
}