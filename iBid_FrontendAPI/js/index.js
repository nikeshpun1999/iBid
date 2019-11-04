$(document).ready(function () {
    //var moment = moment();
    var tok = localStorage.getItem("token");
    // alert(tok);
    // alert(moment());

    //  alert(moment().format());


    $.ajax({
        type: "GET",
        url: "http://localhost:5500/auctions/latest2",
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
                data2 += '<img class="card-img-top" src="http://localhost:5500/images/' + res[index].auctionImgName + '" alt="">';
                data2 += '</figure ><div class="py-1 px-2">';
                data2 += '<h5 class="text-center">' + res[index].title + '</h5>';
                data2 += '<div class="d-flex justify-content-between">';
                data2 += '<span>Condition: <b>' + res[index].condition + '</b></span></div><p><div class="d-flex justify-content-between"><span>Type:<b>' + res[index].type + '</b></span></div></p></div ><p>';
                data2 += '<a href="auction_product_page.html?id=' + res[index]._id + '" class="btn btn-primary">Join Bid </a>';
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
        url: "http://localhost:5500/auctions/allopen",
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
                data2 += '<img class="card-img-top" src="http://localhost:5500/images/' + res[index].auctionImgName + '" alt="">';
                data2 += '</figure ><div class="py-1 px-2">';
                data2 += '<h5 class="text-center">' + res[index].title + '</h5>';
                data2 += '<div class="d-flex justify-content-between">';
                data2 += '<span>Condition: <b>' + res[index].condition + '</b></span></div><p><div class="d-flex justify-content-between"><span>Type:<b>' + res[index].type + '</b></span></div></p></div ><p>';
                data2 += '<a href="auction_product_page.html?id=' + res[index]._id + '" class="btn btn-primary">Join Bid </a>';
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

                $('#openauc').html(data2);







            })
        }

    })
    $.ajax({
        type: "GET",
        url: "http://localhost:5500/auctions/all",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + tok);
        },
        success: function (res) {

            console.log(res)

            var data2 = "";
            $.each(res, function (index) {

                //  alert(moment().format());
                if (res[index].progress == "Open" && moment().format() > res[index].auctionEndtime) {


                    $.ajax({
                        url: 'http://localhost:5500/auctions/updatestatus/' + res[index]._id,
                        type: 'GET',
                        // enctype: 'multipart/form-data',
                        //contentType: false,
                        //processData: false,
                        //cache: false,

                        success: function (res, textStatus, xhr) {
                            console.log(res);
                            alert("Status changed");
                            location.reload();



                        },
                        error: function (xhr, textStatus, errorThrown) {
                            console.log('Error in Operation');
                            alert("nope")

                        }
                    });
                }






            })
        }

    })

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5500/auctions/allclosed',
        success: function (res) {
            console.log(res)

            var data3 = "";

            $.each(res, function (index1) {





                data3 += '<div class="col-sm-3 px-2" >';
                data3 += '<div class="box-shadow">';
                data3 += '<figure class="img-fit">';
                data3 += '<img class="card-img-top" src="http://localhost:5500/images/' + res[index1].auctionImgName + '" alt="">';
                data3 += '</figure ><div class="py-1 px-2">';
                data3 += '<h5 class="text-center">' + res[index1].title + '</h5>';
                data3 += '<div class="d-flex justify-content-between">';
                data3 += '<span>Condition: <b>' + res[index1].condition + '</b></span></div><p><div class="d-flex justify-content-between"><span>Type:<b>' + res[index1].type + '</b></span></div></p></div >';
                data3 += ' <a href="auction_product_page.html?id=' + res[index1]._id + '" class="btn btn-primary">Join Bid </a>';
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
                console.log(res[index1].type);

                $('#Closed').html(data3);







            })

        }
    })
    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:5500/auctions/latest",
    //     beforeSend: function (xhr) {
    //         xhr.setRequestHeader("Authorization", "Bearer " + tok);
    //     },
    //     success: function (res) {
    //         console.log("this")
    //         console.log(res)

    //         var data3 = "";

    //         $.each(res, function (index1) {





    //             data3 += '<div class="col-sm-3 px-2" >';
    //             data3 += '<div class="box-shadow">';
    //             data3 += '<figure class="img-fit">';
    //             data3 += '<img class="card-img-top" src="http://localhost:5500/images/' + res[index1].auctionImgName + '" alt="">';
    //             data3 += '</figure ><div class="py-1 px-2">';
    //             data3 += '<h5 class="text-center">' + res[index1].title + '</h5>';
    //             data3 += '<div class="d-flex justify-content-between">';
    //             data3 += '<span>Condition: <b>' + res[index1].condition + '</b></span></div><p><div class="d-flex justify-content-between"><span>Type:<b>' + res[index1].type + '</b></span></div></p></div >';
    //             data3 += ' <a href="auction_product_page.html?id=' + res[index1]._id + '" class="btn btn-primary">Join Bid </a>';
    //             data3 += '</p></div ></div ></div>';


    //             // data2 += '<img class="card-img-top" src="http://localhost:5500/' + res[index].auctionimagename + '" alt="">';
    //             // data2 += ' <div class="card-body">';
    //             // data2 += '<h4 class="card-title">' + res[index].title + '</h4>';
    //             // data2 += '<p class="card-text"></p>';
    //             // data2 += '</div>';
    //             // data2 += '<div class="card-footer">';
    //             // data2 += '<a href="showpost.html?id=' + res[index]._id + '" class="btn btn-primary">More details...</a>';
    //             // data2 += '</div>';
    //             // data2 += '</div>';
    //             // data2 += '</div>';



    //             // console.log(res[index].RecipeImgName)
    //             // console.log(res);
    //             console.log(res[index1].type);

    //             $('#latestauc2').html(data3);







    //         })
    //     }

    // })
})