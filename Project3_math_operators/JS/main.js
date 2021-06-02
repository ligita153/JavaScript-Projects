function addition_Function() { //Defining a function and naming it
    var addition = 9 + 8; //Defining a variable and giving it a value
    document.getElementById("Math").innerHTML = "9 + 8 = " + addition; //Putting the value in order to display the result of the function
}

function subtraction_Function() { //Defining a function and naming it
    var subtraction = 26 - 11; //Defining a variable and giving it a value
    document.getElementById("Math2").innerHTML = "26 - 11 = " + subtraction; //Putting the value in order to display the result of the function
}

function multiplication_Function() { //Defining a function and naming it
    var multiplication = 7 * 7; //Defining a variable and giving it a value
    document.getElementById("Math3").innerHTML = "7 * 7 = " + multiplication; //Putting the value in order to display the result of the function
}

function division_Function() { //Defining a function and naming it
    var division = 81 / 9; //Defining a variable and giving it a value
    document.getElementById("Math4").innerHTML = "81 / 9 = " + division; //Putting the value in order to display the result of the function
}

function more_Math() { //Defining a function and naming it
    var simple_Math = (4 + 4) * 5 / 2 - 4; //Defining a variable and giving it a value
    document.getElementById("Math5").innerHTML = "(4 + 4) * 5 / 2 - 4 = " + simple_Math; //Putting the value in order to display the result of the function
}

function modulus_Operator() { //Defining a function and naming it
    var modulus = 36 % 7; //Defining a variable and giving it a value
    document.getElementById("Math6").innerHTML = "36 % 7 = " + modulus; //Putting the value in order to display the result of the function
}

function negation_Operator() { //Defining a function and naming it
    var x = 17; //Defining a variable and giving it a value
    document.getElementById("Math7").innerHTML = -x; //Putting the value in order to display the result of the function
}

var X = 9; //Defining a variable and giving it a value
X++; //Defining the increment operator
document.write(X); //Displaying incremented variable using document.write method

document.write("<br>"); //Inserting a line break
document.write("<br>"); //Inserting a line break

var X = 7.45; //Defining a variable and giving it a value
X--; //Defining the decrement operator
document.write(X); //Displaying decremented variable using document.write method

window.alert(Math.random() * 10); //Utilized the Math.random() function