$(document).ready(function() {
    $('#about-link').click(function() {
        $('#about-link').slideUp().slideDown();
        $('#about-link').css('color', 'white');
      
    });

    $('#accomodation-link').click(function() {
       $('#accomodation-link').slideUp().slideDown();
       $('#accomodation-link').css('color', 'white');
    });

    $('#gallery-link').click(function() {
        $('#gallery-link').slideUp().slideDown();
        $('#gallery-link').css('color', 'white');
    });

    $('#book-link').click(function() {
        $('#book-link').slideUp().slideDown();
        $('#book-link').css('color', 'white');
    });

    $('#tC').click(function() {
        $('#tC').slideUp().slideDown();
        $('#tC').css('color', 'white');
    });

    $('#boho').click(function() {
        $('#boho').slideUp().slideDown();
    });
});

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
var acc = document.getElementsByClassName("accordion");
var i;

