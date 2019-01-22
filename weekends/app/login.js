function login_form(){


var login_form=`

 <!--Form with header-->
<div class="card" style='padding:6%;' id='logn-card'>
  <div class="card-block">
<!-- Form login -->

<div>
    <p class="h5 text-center mb-4"></p>
<hr>
    <div class="md-form">
        <i class="fa fa-user prefix grey-text"></i>
        <input type="text" id="form_username" class="form-control">
        <label for="defaultForm-email">Your Username</label>
    </div>

    <div class="md-form">
        <i class="fa fa-lock prefix grey-text"></i>
        <input type="password" id="form_pass" class="form-control">
        <label for="defaultForm-pass">Your password</label>
    </div>

    <div class="md-form" id='pinfield' style='display:block;'>
        <i class="fa fa-lock prefix grey-text"></i>
        <input type="password" id="form_pin" pattern="[0-9]{6}" maxlength="6" class="form-control">
        <label for="defaultForm-pass">Enter your PIN</label>
    </div>

    <div class="text-center">
        <button class="btn btn-primary" onclick='login_process()'>Login</button>
    </div>
</div>

<!-- Form login -->
  <!--Footer-->
 	<div class="modal-footer">
    	<div class="options"></div>
    </div>
</div>
<!--/Form with header-->

`;






var str=`
<main>
<header>
    <nav class="navbar fixed-top " style='background:#0d47a1; box-shadow:none; z-index:4; height:100px;'>
 <div style='width:100%; background:#0d47a1;' align='center'>
<!--
<img id='logo_1' src="../resources/jc-logo-white.png" style='width:250px;'>
-->
</div>
    </nav>
</header>

<div class="container-fluid" style='padding-top:150px;'>
<div class='row'>
<div class='col-sm-12 col-md-12 col-lg-6'>
<img src='./resources/juan.png' id='juan-login' style='' class='img-fluid moveupdown1'>
</div>
<div class='col-sm-12 col-md-12 col-lg-6'>
<div class='login-container' >
`+login_form+`
</div>
</div>
</div>
</div>
</main>

`;


$('body').html(str);
}



















function login_process(){

var usr=$('#form_username').val();
var pass=$('#form_pass').val();
var pin=$('#form_pin').val();



$.ajax({
	url:base_url+"index.php/acctload/loadLoginProcess",
	method:"POST",
	data:{usr:usr, pass:pass},
	success:function(data){
		console.log(data);
		var n=JSON.parse(data);
		if(n.booll==true){
			
			var accountid=n.accountid;
			var pin1=n.pin;

			
if(pin==pin1){
toastr.success("Access Granted");
			localforage.setItem('session_accountid', accountid).then(function (value) {
    		localStorage.setItem("user_accountid",accountid);
            
            setTimeout(function(){ main_app(); },1000);
    		
		    
		    console.log(value);
			

			}).catch(function(err) {
    		// This code runs if there were any errors
    		console.log(err);
			});
}
else{
	toastr.error("Invalid PIN");
}

		}
		else{
		toastr.error(n.msg);	
		}
	},
	error:function(err){
		console.log(err);
		toastr.error("Network Problem Detected");
	}
});






}






function logoutifsessionexpires(){
	localforage.getItem('session_accountid').then(function(value) {
    console.log(value);

    if(value==null){
    	 login_form();	
    }
    else{
    	main_app();
    }

}).catch(function(err) {
    console.log(err);
});
}