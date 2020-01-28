// check if doc is loaded
$(document).ready(function () { 
    let $menuButton = $("#menu-button");
    let $closeButton = $("#close-button");
    let dropdownBox = $(".dropdown-box");
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
    $menuButton.click(openMenu);
    $closeButton.click(closeMenu);

    // open & close menu
    function openMenu() {
        $("#menu").width("100%")
    };
    function closeMenu() {
        $("#menu").width("0")
    };

    // open & close dropdown box



    // scroll to races
    let $width = $(window).width();
    $(window).resize(function() {
        $width = $(window).width()
    });

    $(".arrow").click(function(){    
        if ($width >= 700) { 
            // for index.html
            if (window.location.href == "http://127.0.0.1:5500/build/index.html" || 
                window.location.href == "http://127.0.0.1:5500/build/") {
                $("html, body").animate({scrollTop:$(".section-a").position().top}, "slow");
            }
            else if (window.location.href == "http://127.0.0.1:5500/build/en/index.html") {
                $("html, body").animate({scrollTop:$(".section-a").position().top}, "slow");
        }
        };
    });

    // expand items
    $('.toggle').click(function(e) {
        e.preventDefault();

      if ($(this).next().hasClass('show')) {
          $(this).next().removeClass('show');
          $(this).next().slideUp(350);
      } else {
        $(this).parent().parent().find('li .inner').removeClass('show');
        $(this).parent().parent().find('li .inner').slideUp(350);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(350);
      }
  });

});