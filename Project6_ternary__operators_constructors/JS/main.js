function Vote_Function() {  //Creating Vote function by giving it a name to attach to HTML doc
    var Age, Can_vote; //The variable(age), will determine if they can vote
    Age = document.getElementById("Age") .value; //Connecting JS function with ID
    Can_vote = (Age < 18) ? "You are not old enough kid":"You are able to vote!"; //Creating response wether age is typed above or below 18
    document.getElementById("Vote").innerHTML = Can_vote + " to vote. "; //Sourcing another function to decide if user can vote
}
function Vehicle(Make, Model, Year, Color) { //Creating a vehicle variable
    this.Vehicle_Make = Make;   //Using "This" to establish there will be a new variable of this type
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack =  new Vehicle("Dodge", "Viper", 2020, "Red");  //creating "new instance" and giving examples to source to "this" statements
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {  //creating function for HTML to source to give answers of each individuals vehicle type
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}
function count_Function() { //nesting a function within a function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;} //nested function build to count up by 1
        Plus_one();
        return Starting_point;
    }
}