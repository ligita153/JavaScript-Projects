function full_quote() { //Defining a function and naming it
    var part_1 = "Yesterday is history, "; //Defining a variable and giving it a value
    var part_2 = "tomorrow is a mystery, "; //Defining a variable and giving it a value 
    var part_3 = "today is God's gift, "; //Defining a variable and giving it a value
    var part_4 = "that's why we call it the present."; //Defining a variable and giving it a value
    var whole_quote = part_1.concat(part_2, part_3, part_4); //Defining a variable and giving it a value
    document.getElementById("Concatenate").innerHTML = whole_quote; //Putting the value in order to display the result of the  function
}

function slice_Method(){ //Defining a function and naming it
    var Sentence = "If you fell down yesterday, stand up today."; //Defining a variable and giving it a value
    var Section = Sentence.slice(28,36); //Defining a variable and giving it a value
    document.getElementById("Slice").innerHTML = Section; //Putting the value in order to display the result of the  function
}

function string_Method() { //Defining a function and naming it
    var X = 153; //Defining a variable and giving it a value
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); //Putting the value in order to display the result of the  function
}

function precision_Method() { //Defining a function and naming it
    var Y = 52163.6584952316584796325; //Defining a variable and giving it a value
    document.getElementById("Precision").innerHTML = Y.toPrecision(7); //Putting the value in order to display the result of the  function
}