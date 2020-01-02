//check if doc is loaded
document.addEventListener('DOMContentLoaded', function () {
    let menuButton = document.getElementById("menu-button");
    let closeButton = document.getElementById("close-button");

    let racesButton = document.getElementById("races-button");
    let dropdownMenu = document.getElementById("dropdown");

    let inputFields = document.querySelectorAll(".input-field");

    let submitButton = document.getElementById("submit-button");

    //open & close menu
    function openMenu() {
        document.getElementById("menu").style.width = "100%";
    };
    function closeMenu() {
        document.getElementById("menu").style.width = "0"
    }

    function racesMenu() {
        if (dropdownMenu.classList.contains("active")) {
            dropdownMenu.classList.remove("active")    
        }
        else {
            dropdownMenu.classList.add("active"); 
        }
    };

    //clear input fields on reload
    window.onload = function() {
        inputFields.forEach (function(field) {
            field.value = "";
        });
        
    };

    // validate form


    //button listeners
    menuButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    racesButton.addEventListener("click", racesMenu);
    //submitButton.addEventListener("click", validateForm);
});


// jQuery
$(document).ready(function () {
    let width = $(window).width();
    $(window).resize(function() {
        width = $(window).width()
    });    

    $('#races-button').click(function(){    
        // scroll to races
        if (width >= 700) { 
            // index.html
            if (window.location.href == "http://127.0.0.1:5500/build/index.html") {
                $('html, body').animate({scrollTop:$('#section-a').position().top-95}, 'slow');
            }
            // non-index pages
        };
    });

    //validate form

});