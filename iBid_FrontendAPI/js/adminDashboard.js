$(document).ready(function () {
    var tok = localStorage.getItem("token");
    if (tok == "") {
        alert("Sorry, you are not logged in.");
        location.href = "./login.html";
    }
    $("#logout").click(function () {
        console.log(tok);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:5500/profiles/logout',
            beforeSend: function (xhr) {
                if (tok) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + tok);
                }
            },
            success: function () {
                alert("Logged out Successfully");
                localStorage.setItem("token", "");
                location.href = "./login.html";
            },
            error: function () {
                alert("Logged out Successfully");
                localStorage.setItem("token", "");
                location.href = "./login.html";
            }
        });
    });
});