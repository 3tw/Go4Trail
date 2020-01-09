// check if doc is loaded
$(document).ready(function () {    
    let menuButton = document.getElementById("menu-button");
    let closeButton = document.getElementById("close-button");

    let racesButton = document.getElementById("races-button");
    let dropdownMenu = document.getElementById("dropdown");

    // open & close menu
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

    // button listeners
    menuButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    racesButton.addEventListener("click", racesMenu);

    // scroll to races
    let width = $(window).width();
    $(window).resize(function() {
        width = $(window).width()
    });    

    $("#races-button").click(function(){    
        if (width >= 700) { 
            // index.html
            if (window.location.href == "http://127.0.0.1:5500/build/index.html") {
                $("html, body").animate({scrollTop:$("#headline").position().top}, "slow");
            }
        };
    });

});