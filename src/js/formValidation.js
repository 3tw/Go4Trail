// check if doc is loaded
$(document).ready(function () {  
    let $form = $("#contact-form");

    // validate form
    $form.validate({
        rules: {
            name: {
                required: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            email: {
                required: true,
                email: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            message: {
                required: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
        },
        messages: {
            name: "",
            email: "",
            message: "",
        },
        highlight: function (element) {
            $(element).css("border-color", "red")
        },
        unhighlight: function (element) {
            $(element).css("border-color", "black")
        }
    });
});

// clear input fields
window.onload = function() {
    $(".input-field").each(function () {
        $(this).val("");
    })
}

//prevent form resubmission
if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
}