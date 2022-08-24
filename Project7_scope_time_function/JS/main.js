var X = 55;  //Using outside/global variable to accomplish 2 math functions
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
function Add_numbers_3() { //Using a local variable to intentionally miss the 2nd function
    var Y = 77;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();
function Add_numbers_3() { //Using console log to assist in explaining where I went wrong in the code
    var Y = 77;
    console.log(15 + Y);
}
function Add_numbers_3() {
    console.log(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() { //Function to pull the date and hours to send a message if before 6PM
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

function guess_number() { //Creating a function for "if" statement 
    Number = document.getElementById("number").value;
    if (number == 7) {
        Guess = "Wow you are lucky!"
    }
    else {
        Guess = "Not today";
    }
    document.getElementById("Guess").innerHTML = Guess;
}
function Height_Function() { //Creating another function to run full "if" "else" statements and outputs
    Height = document.getElementById("Height").value;
    if (Height >= 70) {
        Ride = "You are tall enough to ride!"
    }
    else {
        Ride = "Oops, a little too short for this one!";
    }
    document.getElementById("How_tall_are_you?").innerHTML = Ride;
}