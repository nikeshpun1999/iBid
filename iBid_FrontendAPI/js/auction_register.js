$(document).ready(function () {
    let imageFile = '';
    var tok = localStorage.getItem("token");
    $("#auctionImgname").on('change', function () {

        //alert("hello");
        let formData = new FormData();
        let files = $("#auctionImgname").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5500/auctions/uploadimg',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (res) {
                imageFile = res;
                console.log(imageFile);
                alert("Image uploaded");
            },
            error: function () {
                alert("Image upload failed!");
            }
        });

        //////////////////////////////////////////////////////////////

        $("#registerauc").click(function (e) {
            e.preventDefault();
            Title = $("#title").val();
            ship = $("#shippingCost").val();
            con = $("#country").val();
            Type = $("#type").val();
            Condition = $("#condition").val();
            Year = $("#year").val();
            //alert(imageFile);
            data = {
                "auctionImgname": imageFile,
                "title": Title,
                "shippingCost": ship,
                "country": con,
                "type": Type,
                "condition": Condition,
                "year": Year

            };
            //console.log(tok);
            $.ajax({
                type: 'POST',
                url: 'http://localhost:5500/auctions/registerauction',

                data: data,

                success: function (res, textStatus, xhr) {
                    console.log(res);
                    alert("Auction registered Succesfully!!!");

                },
                error: function (jqxhr, textStatus, errorThrown) {
                    alert("Registration failed!!!");
                    // location.href = "index.html";

                }
            })
        })
    });

})