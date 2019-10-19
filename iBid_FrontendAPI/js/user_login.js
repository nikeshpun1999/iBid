$(document).ready(function () {  	
			$('#loginUser').click(function (e) {  
			e.preventDefault();
			   var Email = $("#Email").val();
			   var Password = $("#Password").val();
			   //alert(password)
			   var data = {
			   "Email" : Email,
			   "Password" : Password
			   }	   
				$.ajax({  
					type: 'post', 
					url: 'http://localhost:5500/userLogin',  
					data:data,  
					success: function (res, textStatus, xhr) {  
						if(res.token!=null)
						{
							localStorage.setItem("token",res.token)
							alert("Logged in Successfully")
							if(res.user.usertype=="Admin"){
								location.href="admin/index.html";
							}
							else{
								location.href="user/home.html";
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
