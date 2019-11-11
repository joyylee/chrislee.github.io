// $(document).ready(function() {

//     typeWriter();
//     $('.carousel').carousel();
// });

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
var captionsIndex = 1;

showSlides(slideIndex);
showCaptions(captionsIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    showCaptions(captionsIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
    showCaptions(captionsIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var captions = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";


    // captionText.innerHTML = captions[captionsIndex - 1].alt;
    // console.log(captions[captionsIndex - 1].alt);
}



// Next/previous controls
function plusCaptions(n) {
    showCaptions(captionsIndex += n);
}

function showCaptions(n) {
    var i;
    // var slides = document.getElementsByClassName("mySlides");
    var captions = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");

    if (n > captions.length) { captionsIndex = 1 }
    if (n < 1) { captionsIndex = captions.length }
    for (i = 0; i < captions.length; i++) {
        captions[i].style.display = "none";
    }
    captions[captionsIndex - 1].style.display = "block";
}