$(document).ready(function () {
    let imageFile = '';
    $("#auctionImgname").on('change', function () {
        let formData = new FormData();
        let files = $("#auctionImgname").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5500/auctions/uploadAuctionImage',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (res) {
                imageFile = imageFile.filename;
                alert("Image uploaded");
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });
    //////////////////////////////////////////////////////////////
    var tok = localStorage.getItem("token");
    $("#registerauc").click(function (e) {
        e.preventDefault();
        Title = $("#title").val();
        ship = $("#shippingCost").val();
        con = $("#country").val();
        Type = $("#type").val();
        Condition = $("#condition").val();
        Year = $("#year").val();

        data = {
            "title": Title,
            "shippingCost": ship,
            "country": con,
            "type": Type,
            "condition": Condition,
            "year": Year,
            "auctionImgname": imageFile
        }
        console.log(tok);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5500/auctions/registerauction',
            dataType: 'json',
            data: data,

            success: function (res, textStatus, xhr) {
                console.log(res);
                alert("Auction registered Succesfully!!!");

            },
            error: function (jqxhr, textStatus, errorThrown) {
                alert("Auction registered!!!");
                // location.href = "index.html";

            }
        })
    })


})