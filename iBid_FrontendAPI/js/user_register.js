$(document).ready(function () {
    $('#RegisterUser').click(function (e) {
        e.preventDefault();
        var firstname = $("#fname").val();
        var middlename = $("#mdlname").val();
        var lastname = $("#lname").val();
        var about = $("#about").val();
        var gender = $("input[name='gender']:checked").val();
        var Contact = $("#Contact").val();
        var email = $("#email").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var address = $("#address").val();
        var dob = $("#dob").val();
        //alert(password)
        var data = {
            "firstname": firstname,
            "middlename": middlename,
            "lastname": lastname,
            "gender": gender,
            "about": about,
            "Contact": Contact,
            "email": email,
            "username": username,
            "password": password,
            "address": address,
            "userType": "user",
            "dob": dob
        };
        $.ajax({
            type: 'post',
            url: 'http://localhost:5500/profiles/registerprofile',
            data: data,
            success: function (res, textStatus, xhr) {
                alert("Registered Successfully");
                location.href = "login.html";
                console.log('abc');
            },
            error: function (xhr, textStatus, errorThrown) {
                alert(errorThrown);
                console.log('Error in Operation');
            }
        });
    });
    //var tok = localStorage.getItem('token');
    //alert(tok)		
}); 