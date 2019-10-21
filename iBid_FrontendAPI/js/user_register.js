$(document).ready(function () {
    $('#RegisterUser').click(function (e) {
        e.preventDefault();
        var firstname = $("#firstname").val();
        var middlename = $("#middlename").val();
        var lastname = $("#lastname").val();
        var about = $("#about").val();
        var gender = $("input[name='gender']:checked").val();
        var Contact = $("#Contact").val();
        var email = $("#email").val();
        var username = $("#username").val();
        var password = $("#password").val();
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
            "password": password
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