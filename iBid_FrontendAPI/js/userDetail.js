$(document).ready(function () {
    $.getJSON('http://localhost:5500/profiles/getUserForAdmin', function (res) {
        $.each(res, function (index) {
            $('#showUser').append('<tr>' +
                '<td> ' + res[index].firstname + '</td>' + '<td> ' + res[index].middlename +
                '</td>' + "<td>" + res[index].lastname + "</td>" + "<td>" + res[index].credit + "</td>"
                + "<td>" + res[index].address + "</td>" + "<td>" + res[index].email + "</td>"
                + "<td>" + res[index].gender + "</td>" + "<td>" + res[index].username + "</td>"
                + '<td>' + '<img src="http://localhost:5500/images/' + res[index].profilepic + '" width="150" height="100">' + '</td>'
                + '<td>'
                + '<button class="btn btn-primary" value=' + res[index]._id + ' id="credit" type="submit">Add 500 credit</a>'
                + '</td>' + '</tr>'
                + '<td><button id="delete" type="submit" class="btn btn-lg btn-primary" value="' + res[index]._id
                + '">Delete</button></td>' + '</tr>');

        });

    });


    $('#showUser').on('click', '#delete', function () {

        id = $(this).val();
        //alert(id);
        $.ajax({
            url: 'http://localhost:5500/profiles/delete-user/' + id,
            type: 'DELETE',
            dataType: 'json',
            data: id,
            success: function (data, textStatus, xhr) {
                console.log(data);
                alert("Successfully deleted!!")
                location.reload();
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
            }
        });
    });

    $('#showUser').on('click', '#credit', function () {

        id = $(this).val();

        $.ajax({
            url: 'http://localhost:5500/profiles/getuserdata/' + id,
            type: 'GET',
            success: function (res, textStatus, xhr) {
                console.log(res);
                //  alert("user fetched");
                //alert(res.credit);


                var data1 = res.credit;
                $.ajax({
                    url: 'http://localhost:5500/profiles/addcredit/' + id + '/' + data1,
                    type: 'POST',

                    success: function (res, textStatus, xhr) {
                        console.log(res);
                        //   alert("Credit Added");
                        location.href = "bidders.html";


                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log('Error in Operation');

                    }
                });

            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
                //   alert("error")

            }
        });

    });

});