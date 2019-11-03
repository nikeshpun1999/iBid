$(document).ready(function () {

    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get("id"));
    // alert("this");
    var id = urlParams.get("id");
    // alert(id);
    console.log(id);
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5500/auctions/getselectedauction/' + id,
        success: function (auction) {
            console.log(auction);
            // alert(recipe.RecipeName);

            $('#title').text(auction.title);
            $('#cost').text(auction.shippingCost);
            $('#country').text(auction.country);
            $('#type').text(auction.type);
            $('#condition').text(auction.condition);
            $('#year').text(auction.year);
            $('#showImage').append(
                '<img src="http://localhost:5500/auctions/images/" + imageFile>'
            );

            // alert("what?")
            // alert(recipe.Uid);
            //  alert(recipe.RecipeImgName);
        }
    })


});