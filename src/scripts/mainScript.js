//check if doc is loaded
$(document).ready(function () {    
    let menuButton = document.getElementById("menu-button");
    let closeButton = document.getElementById("close-button");

    let racesButton = document.getElementById("races-button");
    let dropdownMenu = document.getElementById("dropdown");

    let inputFields = document.querySelectorAll(".input-field");

    let form = document.getElementById("contact-form");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message")

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

<<<<<<< HEAD
=======
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

>>>>>>> 12de7e8c9c105a3474e197931595ba20c8b61ebc
    //clear input fields on reload
    window.onload = function() {
        inputFields.forEach (function(field) {
            field.value = "";
        });
        
    };

<<<<<<< HEAD
    //validate form
    function validateForm() {
        // trim to remove the whitespaces
        let nameValue = name.value.trim();
        let emailValue = email.value.trim();
        let messageValue = message.value.trim();
        
        if (nameValue === '') {
            error();
        } else {
            success()
        }
        
        if (emailValue === '') {
            error()
        } else if (!isEmail(emailValue)) {
            error()
        } else {
            success()
        }
        
        if (messageValue === '') {
            error()
        } else {
            success() 
        }
    }

    function error() {
        return false
    }
    function success(){
        return true
    }
        
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }


    //button listeners
    menuButton.addEventListener("click", openMenu);
    closeButton.addEventListener("click", closeMenu);
    racesButton.addEventListener("click", racesMenu);
    //form.addEventListener('submit', e => {
      //  e.preventDefault();
        //validateForm();
    //});    

    // scroll to races
    let width = $(window).width();
    $(window).resize(function() {
        width = $(window).width()
    });    

    $('#races-button').click(function(){    
        if (width >= 700) { 
            // index.html
            if (window.location.href == "http://127.0.0.1:5500/build/index.html") {
                $('html, body').animate({scrollTop:$('#section-a').position().top-80}, 'slow');
            }
            // non-index pages
            // ??? figure out


        };
    });

    //navigation bar color change
    $('#showcase').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
            alert('end reached');
        }
    })


   

});

=======
});
>>>>>>> 12de7e8c9c105a3474e197931595ba20c8b61ebc
