// check if doc is loaded
$(document).ready(function () { 
    let menuButton = document.getElementById("menu-button");
    let closeButton = document.getElementById("close-button");

    let racesButton = document.getElementById("races-button");

    let smallScreen = window.matchMedia("(max-width: 700px)");

    // refresh on top
    $(this).scrollTop(0);

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
            $smallHeadline.addClass("active");
            $bigHeadline.removeClass("active");
            $arrow.removeClass("active");
        }
        else {
            $smallHeadline.removeClass("active");
            $bigHeadline.addClass("active");
            $arrow.addClass("active");
    }
    };

    // button listeners
    menuButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);

    // open & close menu
    function openMenu() {
        document.getElementById("menu").style.width = "100%";
    };
    function closeMenu() {
        document.getElementById("menu").style.width = "0"
    };


    // scroll to races
    let $width = $(window).width();
    $(window).resize(function() {
        $width = $(window).width()
    });
    console.log($width)

    $(".arrow").click(function(){    
        if ($width >= 700) { 
            // for index.html
            if (window.location.href == "http://127.0.0.1:5500/build/index.html" || 
                window.location.href == "http://127.0.0.1:5500/build/") {
                $("html, body").animate({scrollTop:$("#section-a").position().top}, "slow");
            }
            else if (window.location.href == "http://127.0.0.1:5500/build/en/index.html") {
                $("html, body").animate({scrollTop:$("#section-a").position().top}, "slow");
        }
        };
    });

});