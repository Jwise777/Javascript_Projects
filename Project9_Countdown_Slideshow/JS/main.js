let slideIndex = 1; // Slide show starting at 1
showSlides(slideIndex);

function plusSlides(n) {  // This is to create the next and back buttons
    showSlides(slideIndex += n);
}


function currentSlide(n) { //This shows current slide you are on 
    snowSlides(slideIndex = n);
}

function showSlides(n) { // Create function that allows user to click through slides
    let i;
    let slides = document.getElementsByClassName("mySlides"); //Giving ID of function to send to Index file
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} //This allows continuous clicks forward or backward if viewer chooses
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}