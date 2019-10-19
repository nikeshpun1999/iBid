$(document).ready(function () {
    $.getJSON('http://localhost:5500/profiles/getUserForAdmin', function (res) {
        $.each(res, function (index) {
            $('#showUser').append('<tr>' +
                '<td> ' + res[index].Fname + '</td>' + '<td> ' + res[index].Mname +
                '</td>' + "<td>" + res[index].Lname + "</td>" + "<td>" + res[index].Contact + "</td>"
                + "<td>" + res[index].Aboutme + "</td>" + "<td>" + res[index].Email + "</td>"
                + "<td>" + res[index].Gender + "</td>" + "<td>" + res[index].Username + "</td>"
                + '<td>' + '<img src="http://localhost:5500/profiles/imageProfile/' + res[index].profilePicture + '" width="150" height="100">' + '</td>'

                + '<td><button id="delete" class="btn btn-lg btn-primary" value="' + res[index]._id
                + '">Delete</button></td>' + '</tr>');
        });

    });


    // $('#showUser').on('click', '#delete', function () {
    //     alert("Successfully deleted!!")
    //     location.href = 'userDetail.html';
    //     id = $(this).val();
    //     //alert(id);
    //     $.ajax({
    //         url: 'http://localhost:3000/delete-user/' + id,
    //         type: 'DELETE',
    //         dataType: 'json',
    //         data: id,
    //         success: function (data, textStatus, xhr) {
    //             console.log(data);
    //         },
    //         error: function (xhr, textStatus, errorThrown) {
    //             console.log('Error in Operation');
    //         }
    //     });
    // });
    /// Loging out
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

    /// user session creation
    // $.ajax({
    //     type: 'get',
    //     url: 'http://localhost:3000/users/me',
    //     beforeSend: function (xhr) {
    //         if (tok) {
    //             xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
    //         }
    //     },
    //     success: function (user) {
    //         $('#username').append('<div class="text-bold text-success p-2"' + '<li>' + 'Mr.' + user.firstname + '</li>' + '</div>');
    //     },
    //     error: function () {
    //         alert("Sorry, you are not logged in.");
    //         location.href = "../login.html";
    //     }
    // });

});