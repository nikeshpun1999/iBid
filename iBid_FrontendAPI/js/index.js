$(document).ready(function () {
    var tok = localStorage.getItem("token");


    $.ajax({
        type: "GET",
        url: "http://localhost:5500/auctions/latest",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + tok);
        },
        success: function (res) {

            console.log(res)

            var data2 = "";
            $.each(res, function (index) {





                data2 += '<div class="col-sm-3 px-2" >';
                data2 += '<div class="box-shadow">';
                data2 += '<figure class="img-fit">';
                data2 += '<img class="card-img-top" src="http://localhost:5500/' + res[index].auctionImgname + '" alt="">';
                data2 += '</figure ><div class="py-1 px-2">';
                data2 += '<h5 class="text-center">' + res[index].title + '</h5>';
                data2 += '<div class="d-flex justify-content-between">';
                data2 += '<span>Condition: <b>' + res[index].condition + '</b></span></div><p><div class="d-flex justify-content-between"><span>Type:<b>' + res[index].type + '</b></span></div></p></div ><p><button class="btn btn-danger" id="join" name="updateProfile" tabindex="13">';
                data2 += ' Join Bid <i class="fas fa-sign-in-alt"></i></button>';
                data2 += '</p></div ></div ></div>';



                // data2 += '<img class="card-img-top" src="http://localhost:5500/' + res[index].auctionimagename + '" alt="">';
                // data2 += ' <div class="card-body">';
                // data2 += '<h4 class="card-title">' + res[index].title + '</h4>';
                // data2 += '<p class="card-text"></p>';
                // data2 += '</div>';
                // data2 += '<div class="card-footer">';
                // data2 += '<a href="showpost.html?id=' + res[index]._id + '" class="btn btn-primary">More details...</a>';
                // data2 += '</div>';
                // data2 += '</div>';
                // data2 += '</div>';



                // console.log(res[index].RecipeImgName)
                // console.log(res);
                console.log(res[index].type);

                $('#latestauc').html(data2);







            })
        }

    })
    $.ajax({
        type: "GET",
        url: "http://localhost:5500/auctions/latest",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + tok);
        },
        success: function (res) {

            console.log(res)

            var data3 = "";
            var index1 = 3;
            $.each(res, function (index) {
                index1 = index1 + 1;




                data3 += '<div class="col-sm-3 px-2" >';
                data3 += '<div class="box-shadow">';
                data3 += '<figure class="img-fit">';
                data3 += '<img class="card-img-top" src="http://localhost:5500/' + res[index1].auctionImgname + '" alt="">';
                data3 += '</figure ><div class="py-1 px-2">';
                data3 += '<h5 class="text-center">' + res[index1].title + '</h5>';
                data3 += '<div class="d-flex justify-content-between">';
                data3 += '<span>Condition: <b>' + res[index1].condition + '</b></span></div><p><div class="d-flex justify-content-between"><span>Type:<b>' + res[index1].type + '</b></span></div></p></div ><p><button class="btn btn-danger" id="join" name="updateProfile" tabindex="13">';
                data3 += ' Join Bid <i class="fas fa-sign-in-alt"></i></button>';
                data3 += '</p></div ></div ></div>';


                // data2 += '<img class="card-img-top" src="http://localhost:5500/' + res[index].auctionimagename + '" alt="">';
                // data2 += ' <div class="card-body">';
                // data2 += '<h4 class="card-title">' + res[index].title + '</h4>';
                // data2 += '<p class="card-text"></p>';
                // data2 += '</div>';
                // data2 += '<div class="card-footer">';
                // data2 += '<a href="showpost.html?id=' + res[index]._id + '" class="btn btn-primary">More details...</a>';
                // data2 += '</div>';
                // data2 += '</div>';
                // data2 += '</div>';



                // console.log(res[index].RecipeImgName)
                // console.log(res);
                console.log(res[index].type);

                $('#latestauc2').html(data3);







            })
        }

    })
})