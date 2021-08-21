var X=5; //Defining a variable and giving it a value
function Add_numbers_1 () { //Defining a function and naming it
    document.write(10+X+ "<br>"); //Displaying variable using document.write method
}
function Add_numbers_2 () { //Defining a function and naming it
    document.write(X+50+ "<br>"); //Displaying variable using document.write method
}
Add_numbers_1 (); //Name of the function
Add_numbers_2 (); //Name of the function

function Add_numbers_3 () { //Defining a function and naming it
    var Y=5; //Defining a variable and giving it a value
    document.write(10+Y+ "<br>"); //Displaying variable using document.write method
}
function Add_numbers_4 () { //Defining a function and naming it
    document.write(Y+50); //Displaying variable using document.write method
}
Add_numbers_3 (); //Name of the function
Add_numbers_4 (); //Name of the function

function get_Date() { //Defining a function and naming it
    if (new Date().getHours() <18) { //Defining if satement
        document.getElementById("Greeting").innerHTML= "How are you today?"; //Putting the value in order to display the result of the nested function
   }
}

function Height_Function() { //Defining a function and naming it
    Height = document.getElementById("Height").value; //Putting the value in order to display the result of the function
    if (Height >= 110) { //Defining if satement
        Ride = "You are tall enought to take this ride!"; //Assigning the result of the if statement
    }
    else { //Defining else statement
        Ride = "You are not tall enought to take this ride!"; //Assigning the result of the else statement
    }
    document.getElementById("What_is_you_height?").innerHTML = Ride; //Putting the value in order to display the result of the nested function
}

function Time_function() { //Defining a function and naming it
    var Time = new Date().getHours(); //Defining a variable and giving it a value
    var Reply; //Defining a variable 
    if (Time < 12 == Time >0) { //Defining if satement
        Reply = "It is morning time!"; //Assigning the result of the if statement
    }
    else if (Time >12 == Time <18) {  //Defining else if statement
        Reply = "It is the afternoon."; //Assigning the result of the else if statement
    }
    else {  //Defining else statement
        Reply = "It is evening time."; //Assigning the result of the else statement
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //Putting the value in order to display the result of the nested function
}