function my_Dictionary() { //Defining a function and naming it
    var Vehicle = { //Defining a variable 
        Type: "Car", //Defining a Key-Value Pair
        Make: "Volkswagen", //Defining a Key-Value Pair
        Model: "Tiguan", //Defining a Key-Value Pair
        Colour: "Silver", //Defining a Key-Value Pair
        Year: 2012 //Defining a Key-Value Pair
    };
    delete Vehicle.Make; //Defining the delete operator
    document.getElementById("Dictionary").innerHTML = Vehicle.Make; //Putting the value in order to display the result of the function
}