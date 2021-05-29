function My_First_Function() { //Defining a function and naming it
    var str = "It's a beautiful day!" ; //Defining a variable and giving it a string value
    var result = str.fontcolor("purple"); //Using the fontcolor method on str variable
    document.getElementById("Purple_Text").innerHTML = result; //Putting the value of result
                                                    // into HTML element with "Purple_Text" id
}

function myFunction() { //Defining a function and naming it
    var quote = "If you do not enjoy a moment,"; //Defining a variable and giving it a string value
    quote += " you lose it forever."; //Concatenating a string by using the += operator
    document.getElementById("Concatenate").innerHTML = quote; //Putting the value in order to display the concatenated string
}