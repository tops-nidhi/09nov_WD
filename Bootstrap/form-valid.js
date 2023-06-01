$("#myform").validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
            },
        phone:{
            required: true,
            number: true,
            minlength: 10,
            maxlength: 10
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 16,
        },
        confirm_password: {
            required: true,
            minlength: 6,
            maxlength: 16,
            equalTo: "#password"

        }
    },
    messages:{
        name: {
            required: "Please enter your name",
            minlength: "Your name must consist of at least 2 characters"
        },
        email: {
            required: "Please enter your email",
            email: "Please enter a email valid format"
        },
        phone: {
            required: "Please enter your phone number",
            number: "Please enter a phone number valid format(only digits are allowed)",
            minlength: "Your phone number must consist of 10 digits",
            maxlength: "Your phone number only consist of 10 digits"
        },
        password: {
            required: "Please enter your password",
            minlength: "Your password must consist of at least 6 characters",
            maxlength: "Your password only consist of 16 characters"
        },
        confirm_password: {
            required: "Please enter your confirm password",
            minlength: "Your confirm password must consist of at least 6 characters",
            maxlength: "Your confirm password only consist of 16 characters",
            equalTo: "Your confirm password must be the same as your password"

        }
    },
    submitHandler: function(form) {
      form.submit();
    }
   });