function full_quote() {
    var part_1 = "Yesterday is history, ";
    var part_2 = "tomorrow is a mystery, ";
    var part_3 = "today is God's gift, ";
    var part_4 = "that's why we call it the present.";
    var whole_quote = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_quote;
}

function slice_Method(){
    var Sentence = "If you fell down yesterday, stand up today.";
    var Section = Sentence.slice(28,36);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X = 153;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 52163.6584952316584796325;
    document.getElementById("Precision").innerHTML = Y.toPrecision(7);
}