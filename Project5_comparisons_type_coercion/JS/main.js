document.write(typeof "Hello!"); //Defining the data type to output string
document.write("<br>"); //Inserting a line break
document.write(typeof 77); //Defining the data type to output number
document.write("<br>"); //Inserting a line break
document.write(3E320); //Defining Infinity
document.write("<br>"); //Inserting a line break
document.write(-2E320);//Defining -Infinity
document.write("<br>"); //Inserting a line break
document.write(27>24); //Defining the Boolean logic to display true or false
document.write("<br>"); //Inserting a line break
document.write(27<24); //Defining the Boolean logic to display true or false
console.log(3+7); //Defining a math operation with the console.log() function
document.write("<br>"); //Inserting a line break
document.write("35" + 4); //Utilizing type coercion
document.write("<br>"); //Inserting a line break
document.write(17==17); //Utilizing comparision to return "true"
document.write("<br>"); //Inserting a line break
document.write(45==47); //Utilizing comparision to return "false"
document.write("<br>"); //Inserting a line break
X=9; //Defining a variable and giving it a value
Y=9; //Defining a variable and giving it a value
document.write(X===Y); //Return true by matching the data type and value.
document.write("<br>"); //Inserting a line break
A=3; //Defining a variable and giving it a value
B="Apple"; //Defining a variable and giving it a value
document.write(A===B); //Return false by writing a different data type and different value
document.write("<br>"); //Inserting a line break
C=5; //Defining a variable and giving it a value
D="5"; //Defining a variable and giving it a value
document.write(C===D); //Return false by writing a different data type but the same value for both
document.write("<br>"); //Inserting a line break
E="Pink"; //Defining a variable and giving it a value
F="Pinky"; //Defining a variable and giving it a value
document.write(E===F); //Return false by writing the same data type but a different value for both
document.write("<br>"); //Inserting a line break
document.write(6>2 && 4>3); //Utilizing AND operator to display "true"
document.write("<br>"); //Inserting a line break
document.write(7>9 && 3>1);  //Utilizing AND operator to display "false"
document.write("<br>"); //Inserting a line break
document.write(5>3 || 4>9);  //Utilizing OR operator to display "true"
document.write("<br>"); //Inserting a line break
document.write(1>3 || 3>7);  //Utilizing OR operator to display "false"
function not_Function() { //Defining a function and naming it
    document.getElementById("Not").innerHTML = !(4>9);//Utilizing NOT operator to display "true"
}

function not1_Function() { //Defining a function and naming it
    document.getElementById("Not1").innerHTML = !(19>9); //Utilizing NOT operator to display "false"
}