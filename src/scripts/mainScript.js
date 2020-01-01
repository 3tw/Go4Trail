let menuButton = document.getElementById("menu-button");
let closeButton = document.getElementById("close-button");

let racesButton = document.getElementById("races-button");
let dropdownMenu = document.getElementById("dropdown");

let inputFields = document.querySelectorAll(".input-field");


//check if doc is loaded
document.addEventListener('DOMContentLoaded', function () {

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

    menuButton.addEventListener("click", openMenu)
    closeButton.addEventListener("click", closeMenu)
    racesButton.addEventListener("click", racesMenu)

   

    //button listener
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("hide-menu")) {
            closeMenu();
        }
        else if (e.target.classList.contains("submit-button")) {
            validateForm();
        }
    });

    //clear input fields on reload
    window.onload = function() {
        inputFields.forEach (function(field) {
            field.value = "";
        });
        
    };

});
