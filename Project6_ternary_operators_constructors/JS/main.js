function Ride_Function() { //Defining a function and naming it
    var Height, Can_ride; //Defining a variable and giving it a value
    Height = document.getElementById("Height").value; //Putting the value in order to display the result of the ternary operator function
    Can_ride = (Height<52)? "You are too short" : "You are tall enough"; //Putting the value in order to display the result of the ternary operator function
    document.getElementById("Ride").innerHTML=Can_ride + " to ride."; //Putting the value in order to display the result of the ternary operator function
}

function Vehicle(Make, Model, Year, Color) { //Defining a function and naming it
    this.Vehicle_Make = Make; //Utilizing "this" keyword
    this.Vehicle_Model = Model; //Utilizing "this" keyword
    this.Vehicle_Year = Year; //Utilizing "this" keyword
    this.Vehicle_Color = Color; //Utilizing "this" keyword
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Defining a variable and giving it a value using the "new" keyword
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //Defining a variable and giving it a value using the "new" keyword
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard"); //Defining a variable and giving it a value using the "new" keyword
function myFunction() { //Defining a function and naming it
    document.getElementById("Keywords_and_Constructors").innerHTML = ////Putting the value in order to display the result of the function
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + ////Putting the value in order to display the result of the ternary operator function
    " manufactured in " + Erik.Vehicle_Year; //Putting the value in order to display the result of the ternary operator function
}
function count_Function() { //Defining a function and naming it
    document.getElementById("Nested_Function").innerHTML = Count(); //Putting the value in order to display the result of the nested function
    function Count() { //Defining a function and naming it
        var Starting_point = 5; //Defining a variable and giving it a value
        function Plus_three() {Starting_point += 3;} //Utilizing a nested function
        Plus_three(); //Utilizing a nested function
        return Starting_point; //Utilizing a nested function
    }
}