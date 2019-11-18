$(document).ready(function() {
    $('#about-link').click(function() {
        $('#about-link').slideUp();
        $('.main').show();  
        $('#accomodation-link').show(); 
        $('#gallery-link').show(); 
        $('#book-link').show(); 
        $('#tC').show();
    });

    $('#accomodation-link').click(function() {
       $('#accomodation-link').slideUp(); 
       $('#about-link').show(); 
       $('#gallery-link').show(); 
       $('#book-link').show(); 
       $('#tC').show(); 
    });

    $('#gallery-link').click(function() {
        $('#gallery-link').slideUp();
        $('#accomodation-link').show(); 
        $('#about-link').show(); 
        $('#book-link').show(); 
        $('#tC').show();
    });

    $('#book-link').click(function() {
        $('#book-link').slideUp();
        $('#accomodation-link').show(); 
        $('#gallery-link').show(); 
        $('#about-link').show(); 
        $('#tC').show();
    });

    $('#tC').click(function() {
        $('#tC').slideUp();
        $('#accomodation-link').show(); 
        $('#gallery-link').show(); 
        $('#book-link').show(); 
        $('#about-link').show();
    });
});