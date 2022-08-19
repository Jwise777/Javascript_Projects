function My_First_Function() {    //Creating function for "click me" button
    var str = "This is the button text!"; //Variable for button text
    document.getElementById("Button_Text") .innerHTML = str;
}
function myFunction() {             //Creating 2nd function 
    var sentence = "I am learning"; //Variable to show a sentence
    sentence += " a lot from this book!"; 
    document.getElementById("Concatenate").innerHTML=sentence;
}