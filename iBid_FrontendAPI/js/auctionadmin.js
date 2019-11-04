$(document).ready(function () {
    alert("hello");
    $.getJSON('http://localhost:5500/auctions/all', function (res) {
        console.log(res);
        $.each(res, function (index) {
            $('#showauctions').append('<tr>' +
                '<td> ' + res[index].title + '</td>' + '<td> ' + res[index].shippingCost +
                '</td>' + "<td>" + res[index].country + "</td>" + "<td>" + res[index].year + "</td>"
                + "<td>" + res[index].type + "</td>" + "<td>" + res[index].condition + "</td>"

                + '<td>' + '<img src="http://localhost:5500/images/' + res[index].auctionImgName + '" width="150" height="100">' + '</td>'
                + '<td>'
                + '</tr>'
                + '<td><button id="delete" type="submit" class="btn btn-lg btn-primary" value="' + res[index]._id
                + '">Delete</button></td>' + '</tr>');

        });

    });




    $('#showauctions').on('click', '#delete', function () {

        var id = $(this).val();
        //alert(id);
        $.ajax({
            url: 'http://localhost:5500/auctions/delete-auction/' + id,
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
                alert("i ma here");
            }
        });
    });


});