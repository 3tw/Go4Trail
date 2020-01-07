// check if doc is loaded
$(document).ready(function () {  
    let $form = $("#contact-form");

    // highlight inputs
    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function(element) {
          $(element)
            .addClass('has-error');
        },
        unhighlight: function(element) {
          $(element)
            .removeClass('has-error');
        }
    })

    // validate form
    $form.validate({
        rules: {
            name: {
                required: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            email: "required",
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
            message: "hj",
          }
    });

});

// clear input fields
window.onload = function() {
    $(".input-field").each(function () {
        $(this).val("");
    })
}