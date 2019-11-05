$(document).ready(function () {
    var auctionid = "";
    var auctioneach = new Array();
    var auctioneach2 = new Array();
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
            auctionid = auction._id;
            console.log("here");
            console.log(auction.auctionImgName);
            // alert(recipe.RecipeName);

            $('#title').text(auction.title);
            $('#cost').text(auction.shippingCost);
            $('#country').text(auction.country);
            $('#type').text(auction.type);
            $('#condition').text(auction.condition);
            $('#year').text(auction.year);
            $('#showAuctionImage').attr('src', 'http://localhost:5500/images/' + auction.auctionImgName);
            $('#status').text(auction.progress);
            if (auction.progress == "Closed") {

                $('#bidsbtn').attr('class', '');


                //var imagelink = "";
                //imagelink += '<img height="570px" width="388px" src="http://localhost:5500/images/' + auction.auctionImgName + '"+ alt=""';
                // $('#showImage').html(imagelink);

                // alert("what?")
                // alert(recipe.Uid);
                //  alert(recipe.RecipeImgName);
                $.ajax({

                    type: 'GET',
                    url: 'http://localhost:5500/bids/allclosed/' + auctionid,

                    success: function (auctioncmt) {
                        console.log("this is it");
                        console.log(auctioncmt)



                        var bidamount = 0;
                        auctioneach2.push(auctioncmt);
                        $.each(auctioncmt, function (index) {
                            // var userid = recipeeach[index].UserId;
                            //console.log(auctioncmt[index].userId);
                            //   alert(auctioncmt[index].bidamount)

                            // for (key = 0; key < result.length; key++) {
                            if (auctioncmt[index].bidamount > bidamount) {
                                bidamount = auctioncmt[index].bidamount
                            }
                        })

                        var data = {
                            "bidamount": bidamount
                        }
                        //  alert(bidamount);
                        $.ajax({
                            type: 'POST',
                            url: 'http://localhost:5500/bids/auctionwinner/' + auctionid + '/' + bidamount,

                            success: function (res, textStatus, xhr) {
                                //res.json(bidamount)
                                //    alert("Winner picked")



                            },
                            error: function (xhr, textStatus, errorThrown) {
                                console.log('Error in Operation');
                                // alert("Login denied");

                            }
                        });





                    }
                })
            }
            $.ajax({
                type: 'GET',
                url: 'http://localhost:5500/auctions/getsimilarauction/' + auction.type,
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

                        $('#similar').html(data3);







                    })

                }
            })
        }
    })



    $.ajax({
        type: 'GET',
        url: 'http://localhost:5500/likes/likecount/' + id,
        success: function (likecount) {
            console.log(likecount);
            //   alert("like counted " + likecount.Like);
            $('#totallikes').text(likecount);

        }
    })
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5500/likes/unlikecount/' + id,
        success: function (unlikecount) {
            console.log(unlikecount);
            //   alert("like counted " + likecount.Like);
            $('#totalunlikes').text(unlikecount);

        }
    })

    $.ajax({
        type: 'GET',
        url: 'http://localhost:5500/comments/getselectedauctionrate/' + id,

        success: function (auctioncmt) {
            //     alert("what?")
            console.log(auctioncmt)
            //     alert(id);

            var comment = "";
            var raters = 0;
            var totalrate = 0;
            var totalrating = 0;

            //this is in object so cant be fetched now ask tomorrow
            auctioneach.push(auctioncmt);
            $.each(auctioncmt, function (index) {
                // var userid = recipeeach[index].UserId;
                console.log(auctioncmt[index].userId);

                // for (key = 0; key < result.length; key++) {

                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:5500/profiles/getuserdata/' + auctioncmt[index].userId,
                    success: function (user) {
                        //       alert("hereeeee" + recipe.Uid)
                        console.log(user);
                        //        alert("entered");
                        //       alert(user.Fname);


                        //this is for user details for the comment and rating.

                        raters = raters + 1;
                        totalrate = totalrate + auctioncmt[index].rate;
                        totalrating = totalrate / raters;
                        console.log(raters);
                        console.log(totalrate);
                        console.log(totalrating);
                        // console.log(result);
                        comment += '<div class="card my-4"><h5 class="card-header">Reviewer Name:-     ' + user.firstname + '</h5>'
                        // comment += '<div  style="background-color:lightblue; width:20px; display:block;"></div>'
                        comment += '<div class="row"><div class="col-md-3 col-sd-12"><img class="d-flex mr-3 rounded-circle" height="150px" width="150px" src="http://localhost:5500/images/' + user.profilepic + '"+ alt="">'
                        comment += '</div><div class="card-body col-md-9 col-sd-12">'
                        // comment += '<h4 class="mt-0" id="commentername">Reviewer Name:' + user.Fname + '</h4>'
                        comment += '<h5 class="mt-0" id="rate"> Rate:-' + auctioncmt[index].rate + '</h5>'
                        comment += '<h5 class="mt-0" id="comment"> Comment:-' + auctioncmt[index].comment + '</h5>'
                        comment += '</div></div></div>'
                        comment += '</div>'
                        $('#commentsection').html(comment);
                        $('#totalrating').html(totalrating);
                        // }
                    }
                })


            })




        }
    })
    $.ajax({
        type: 'GET',
        url: 'http://localhost:5500/bids/getselectedauctionwinner/' + id,

        success: function (aucwinner) {
            console.log("auctioncmt");

            console.log(aucwinner)
            console.log("auctioneer")
            console.log(aucwinner.userId)
            //     alert(id);

            $.ajax({
                type: 'GET',
                url: 'http://localhost:5500/profiles/getuserdata/' + aucwinner.userId,
                success: function (user) {
                    //       alert("hereeeee" + recipe.Uid)
                    console.log(user);

                    $('#winnername').text(user.firstname);
                }
            })







        }
    })





    $("#commentbtn").click(function (e) {
        e.preventDefault();
        //var formData = new FormData(this);
        var tok = localStorage.getItem('token');
        var likeuid = "";
        //alert(tok)
        $.ajax({
            type: "GET",
            url: "http://localhost:5500/profiles/this",
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            }, success: function (data) {

                //alert(data._id);
                userId = data._id;



                var auctionID = auctionid;
                // console.log(Recipeid);
                var userId = userId;
                var rate = $("#rate").val();
                var comment = $("#comment").val();
                //      alert("userid")
                //    alert(userId);
                data1 = {
                    'auctionID': auctionID,
                    'userId': userId,
                    'rate': rate,
                    'comment': comment

                }
                console.log(data1)

                $.ajax({
                    url: 'http://localhost:5500/comments/postcomment',
                    type: 'POST',
                    data: data1,
                    // enctype: 'multipart/form-data',
                    //contentType: false,
                    //processData: false,
                    //cache: false,

                    success: function (res, textStatus, xhr) {
                        console.log(res);
                        alert("Comment saved !!!");
                        location.reload();



                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log('Error in Operation');

                    }
                });
            }
        })

    });
    $("#bidbtn").click(function (e) {
        e.preventDefault();
        //var formData = new FormData(this);
        var tok = localStorage.getItem('token');
        var likeuid = "";
        var bidamounts = $("#bid").val();
        //  alert(bidamounts);
        //alert(tok)
        $.ajax({
            type: "GET",
            url: "http://localhost:5500/profiles/this",
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            }, success: function (data) {
                //  alert(data.credit);
                if (data.credit > bidamounts) {
                    //alert(data._id);
                    userId = data._id;



                    var auctionID = id;
                    // console.log(Recipeid);
                    var userId = userId;
                    var bidamount = bidamounts;

                    var data2 = {
                        'auctionID': auctionID,
                        'userId': userId,
                        'bidamount': bidamount

                    }
                    console.log(data2)
                    alert("Your bid is saved")
                }
                else {
                    alert("you dont have enough balance")
                    data2 = {};
                }
                $.ajax({
                    url: 'http://localhost:5500/bids/bidonauction',
                    type: 'POST',
                    data: data2,
                    // enctype: 'multipart/form-data',
                    //contentType: false,
                    //processData: false,
                    //cache: false,

                    success: function (res, textStatus, xhr) {
                        console.log(res);
                        // alert("Bid saved !!!");
                        location.reload();



                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log('Error in Operation');

                    }
                });
            }
        })

    });
    $("#likebtn").click(function (e) {
        e.preventDefault();
        //var formData = new FormData(this);
        var tok = localStorage.getItem('token');
        var likeuid = "";
        //alert(tok)
        $.ajax({
            type: "GET",
            url: "http://localhost:5500/profiles/this",
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            }, success: function (data) {

                //alert(data._id);
                userId = data._id;



                var auctionID = id;
                // console.log(Recipeid);
                var userId = userId;


                var data2 = {
                    'auctionID': auctionID,
                    'userId': userId

                }
                console.log(data2)

                $.ajax({
                    url: 'http://localhost:5500/likes/postlike',
                    type: 'POST',
                    data: data2,
                    // enctype: 'multipart/form-data',
                    //contentType: false,
                    //processData: false,
                    //cache: false,

                    success: function (res, textStatus, xhr) {
                        console.log(res);
                        alert("Like saved !!!");
                        location.reload();



                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log('Error in Operation');

                    }
                });
            }
        })

    });
    $("#unlikebtn").click(function (e) {
        e.preventDefault();
        //var formData = new FormData(this);
        var tok = localStorage.getItem('token');
        var likeuid = "";
        //alert(tok)
        $.ajax({
            type: "GET",
            url: "http://localhost:5500/profiles/this",
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            }, success: function (data) {

                //alert(data._id);
                userId = data._id;



                var auctionID = id;
                // console.log(Recipeid);
                var userId = userId;


                var data3 = {
                    'auctionID': auctionID,
                    'userId': userId

                }
                console.log(data3)

                $.ajax({
                    url: 'http://localhost:5500/likes/postunlike',
                    type: 'POST',
                    data: data3,
                    // enctype: 'multipart/form-data',
                    //contentType: false,
                    //processData: false,
                    //cache: false,

                    success: function (res, textStatus, xhr) {
                        console.log(res);
                        alert("Unlike saved !!!");
                        location.reload();



                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log('Error in Operation');

                    }
                });
            }
        })

    });



});