$(document).ready(function () {
    var tok = localStorage.getItem("token");
    //alert(tok);
    console.log(tok);
    var id;
    var FirstName;
    var MiddleName;
    var LastName;
    var Address;
    var PhNumber;
    var Email;
    var Usertype;
    var Password;
    // let imageFile = '';
    // $("#profilePicture").on('change', function () {
    //     let formData = new FormData();
    //     let files = $("#profilePicture").get(0).files;
    //     if (files.length > 0) {
    //         formData.append("imageFile", files[0]);
    //     }
    //     $.ajax({
    //         type: 'POST',
    //         url: 'http://localhost:3000/uploadProfilePicture',
    //         contentType: false,
    //         cache: false,
    //         processData: false,
    //         data: formData,
    //         success: function (data) {
    //             imageFile = data.filename;
    //             $('#showImage').append(
    //                 '<img src="http://localhost:3000/imageProfile/' + imageFile + '" width="200" height="150">'
    //             );
    //         },
    //         error: function () {
    //             alert("Image upload failed!");

    //         }
    //     });
    // });
    $.ajax({
        type: 'get',
        url: 'http://localhost:5500/profiles/this',
        beforeSend: function (xhr) {
            if (tok) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
            }
        },
        success: function (data) {
            $('#ID_user').val(data._id);
            $("#FirstName").val(data.firstname);
            $("#MiddleName").val(data.middlename);
            $("#LastName").val(data.lastname);
            $("#About").val(data.about);
            $("#Address").val(data.address);
            $("#dob").val(data.dob);
            $("#Email").val(data.email);
            $("#username").val(data.username);
            $("#Password").val(data.password);

            //profilePicture = imageFile;
            id = data._id;
            FirstName = data.FirstName;
            MiddleName = data.MiddleName;
            LastName = data.LastName;
            Address = data.Address;
            PhNumber = data.PhNumber;
            Email = data.Email;
            Usertype = data.Usertype;
            Password = data.Password;

            console.log(id);

            // $('#showImage').append(
            //     '<img src="http://localhost:3000/imageProfile/' + data.profilePicture + '" width="200" height="150">');
            // $('#username').append('<div class="text-bold text-success p-2"' + '<li>' + 'Mr.' + user.firstname + '</li>' + '</div>');
        },
        error: function () {
            alert("Sorry, you are not logged in.");
            location.href = "../login.html";
        }
    });
    $("#update_profile").click(function (e) {
        e.preventDefault();
        var FirstName = $("#FirstName").val();
        var MiddleName = $("#MiddleName").val();
        var LastName = $("#LastName").val();
        var About = $("#About").val();
        var Address = $("#Address").val();
        var dob = $("#dob").val();
        var Email = $("#Email").val();
        var username = $("#username").val();
        var Password = $("#Password").val();
        var data = {
            //"profilePicture": imageFile,
            "firstname": FirstName,
            "middlename": MiddleName,
            "lastname": LastName,
            "about": About,
            "address": Address,
            "dob": dob,
            "email": Email,
            "username": username,
            "password": Password
        };
        console.log(data);

        $.ajax({
            type: "PUT",
            url: "http://localhost:5500/profiles/updateprofile/" + id,
            data: data,
            success: function (result) {
                // Location.href = "home.html";
                alert(result);

            },
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            },
        });

    });

    // for logging out
    // $("#logout").click(function () {
    //     $.ajax({
    //         type: 'post',
    //         url: 'http://localhost:3000/users/logout',
    //         beforeSend: function (xhr) {
    //             if (tok) {
    //                 xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
    //             }
    //         },
    //         success: function (data) {
    //             location.href = "../login.html";

    //         },

    //         error: function () {
    //             location.href = "../login.html";
    //         }
    //     });
    // });

});