function my_Dictionary() {   //Creating the function and naming it my_Dictionary
    var Animal = {    //The Variable is Animal
        Species:"Dog",  //Givign characteristics to the Animal with keys
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;  //Deleted Animal Sound to create "undefined" errir
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}