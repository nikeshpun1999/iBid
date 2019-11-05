$(document).ready(function () {
	$('#login').click(function (e) {
		e.preventDefault();
		var username = $("#username").val();
		var Password = $("#password").val();
		//alert(password)
		var data = {
			"username": username,
			"password": Password
		}
		//alert("clicked");
		$.ajax({
			type: 'post',
			url: 'http://localhost:5500/profiles/login',
			data: data,
			success: function (res, textStatus, xhr) {
				if (res.token != null) {
					localStorage.setItem("token", res.token)
					// alert("Logged in Successfully")
					if (res.user.userType == "Admin") {
						location.href = "admin_dashboard.html";
					}
					else {
						location.href = "index.html";
					}

				}
			},
			error: function (xhr, textStatus, errorThrown) {
				console.log('Error in Operation');
				alert("Login denied");

			}
		});
	});
	//var tok = localStorage.getItem('token');
	//alert(tok)
});
