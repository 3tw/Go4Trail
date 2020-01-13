// check if doc is loaded
$(document).ready(function () { 
    let menuButton = document.getElementById("menu-button");
    let closeButton = document.getElementById("close-button");

    let racesButton = document.getElementById("races-button");
    let dropdownMenu = document.getElementById("dropdown");

    let smallScreen = window.matchMedia("(max-width: 700px)");

    //media queries
    if (matchMedia){
        smallScreen.addListener(shiftHeadline);
        shiftHeadline(smallScreen);
    };

    // manage headlines
    function shiftHeadline(smallScreen) {
        let $smallHeadline = $(".small-headline");
        let $bigHeadline = $(".big-headline");
        let $arrow = $(".arrow");
        if (smallScreen.matches) {
            $smallHeadline.addClass("active")
            $bigHeadline.removeClass("active");
            $arrow.removeClass("active");

        }
        else {
            $smallHeadline.removeClass("active")
            $bigHeadline.addClass("active");
            $arrow.addClass("active");
    }
    };

    // button listeners
    menuButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    racesButton.addEventListener("click", racesMenu);

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

    // scroll to races
    let $width = $(window).width();
    $(window).resize(function() {
        $width = $(window).width()
    });

    $(".arrow").click(function(){    
        if ($width >= 700) { 
            // for index.html
            if (window.location.href == "http://127.0.0.1:5500/build/index.html") {
                $("html, body").animate({scrollTop:$("#section-a").position().top}, "slow");
            }
            else if (window.location.href == "http://127.0.0.1:5500/build/en/index.html") {
            $("html, body").animate({scrollTop:$("#section-a").position().top}, "slow");
        }
        };
    });

});