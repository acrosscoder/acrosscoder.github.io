
function kitchen_app(){

var str=`
`+progressbar()+`
 <!--Double navigation-->`+header()+`<!--/.Double navigation-->




<main>
<div class='container1 jse-container-1' style=''>
<div style='margin-top:43px;' >



<div class='row jse-border-bottom-line' id='poi_menu1'>
<div class='col-sm-4 col-md-4 col-lg-4'><a href='#' ><div class='jse-tab-panel initial'>Order</div></a></div>
<div class='col-sm-4 col-md-4 col-lg-4'><a href='#'><div class='jse-tab-panel'>Preparing</div></a></div>
<div class='col-sm-4 col-md-4 col-lg-4'><a href='#'><div class='jse-tab-panel'>For Serving</div></a></div>
</div>


<div class='row jse-border-bottom-line' id='poi_menu2'>
<div class='js-col-xs4 col-sm-4 col-md-4 col-lg-4'><a href='#' onclick='menusetcont(1)' ><div class='jse-tab-panel initial menusetcont_tab' id='menusetcont_tab1'>Order</div></a></div>
<div class='js-col-xs4 col-sm-4 col-md-4 col-lg-4'><a href='#' onclick='menusetcont(2)'><div class='jse-tab-panel menusetcont_tab' id='menusetcont_tab2'>Preparing</div></a></div>
<div class='js-col-xs4 col-sm-4 col-md-4 col-lg-4'><a href='#' onclick='menusetcont(3)'><div class='jse-tab-panel menusetcont_tab' id='menusetcont_tab3'>For Serving(<span id='menusetcont_forservingtab3_counter'>0</span>)</div></a></div>
</div>




<div class='row'>
<div class='jse-divider-col_div31 menusetcont' id='menusetcont1'>`+kitchen_orders()+`</div>
<div  class='jse-divider-col_div3 menusetcont' id='menusetcont2'>`+kitchen_preparing_orders()+`</div>
<div  class='jse-divider-col_div3 menusetcont' id='menusetcont3'>`+kitchen_for_serving_orders()+`</div>
</div>


</div>
</div>
</main>

<input type='hidden' id='kit_order_cnt' value='0'/>
<input type='hidden' id='kit_preparing_cnt' value='0'/>
<input type='hidden' id='kit_for_serving_cnt' value='0'/>


<audio id="myAudio">
  <source src="`+base_url+`resources/bell2.mp3" type="audio/mpeg">
<!--  <source src="horse.mp3" type="audio/mpeg">-->
  Your browser does not support the audio element.
</audio>


`;

$('body').html(str);

setTimeout(function(){ tool_init(); 
kitchen_order_set();
kitchen_preparing_order_set();
kitchen_for_serving_order_set();

 },1000);
setInterval(function(){  $('#loader').hide(); },100);
setInterval(function(){ load_kitchen_order_set(); },5000);



}





function playAudio() { 

if(document.getElementById("myAudio")){
document.getElementById("myAudio").play().catch(function() {

});
   }


} 

function pauseAudio() { 
var xx = document.getElementById("myAudio"); 	
if(xx){
  xx.pause(); 
}
} 










function load_kitchen_order_set(){

kitchen_order_set();
kitchen_preparing_order_set();
kitchen_for_serving_order_set();


}


function kitchen_orders(){
return `
<div style='width:100%; padding-left:7%; padding-right:7%;  padding-top:5%; background:#fff;  padding-bottom:100px;' class='jse-fill-height jse-croll-ynotx menu-scroll'>
<div class='row' id='kitchen-orders-content'>
</div>
</div>
`;


}



function kitchen_preparing_orders(){
return `
<div style='width:100%; padding-left:7%; padding-right:7%;  padding-top:5%; background:#fff;  padding-bottom:100px;' class='jse-fill-height jse-croll-ynotx menu-scroll'>
<div class='row' id='kitchen-prep-orders-content'>
</div>
</div>
`;

}

function kitchen_for_serving_orders(){
return `
<div style='width:100%; padding-left:7%; padding-right:7%;  padding-top:5%; background:#fff;  padding-bottom:100px;' class='jse-fill-height jse-croll-ynotx menu-scroll'>
<div class='row' id='kitchen-for-serving-orders-content'>
</div>
</div>
`;

}
function kitchen_order_set(){
var usertypeid=localStorage.getItem('user_userTypeId');

set_kitchen_orders(0,function(result){
var n=result;
var str="";
for(var x=0;x<n.length;x++){
var oid=n[x].oid;
var orderid=n[x].orderid;
var pid=n[x].pid;
var product_name=n[x].product_name;
var qty=n[x].qty;
var order_id=n[x].order_item_id;
var transaction_date=n[x].transaction_date;
var table_number=n[x].table_number;
var btn="";

if(usertypeid==7){ /* if usertype is waiter*/
btn=``;
}
else if(usertypeid==8){
btn=`<button class='btn btn-primary btn-sm' onclick='kitchen_order_to_prepare(`+x+`)'>Prepare</button>`;
}
else{ 

btn=`<button class='btn btn-primary btn-sm' onclick='kitchen_order_to_prepare(`+x+`)'>Prepare</button>`;	

}







str+=`
<input type='hidden' id='ko_oid`+x+`' value='`+oid+`' />
<input type='hidden' id='ko_orderid`+x+`' value='`+orderid+`' />
<input type='hidden' id='ko_pid`+x+`' value='`+pid+`' />
<input type='hidden' id='ko_order_id`+x+`' value='`+order_id+`' />
<input type='hidden' id='ko_product_name`+x+`' value='`+product_name+`' />
<input type='hidden' id='ko_qty`+x+`' value='`+qty+`' />
<div class='col-sm-12' style='margin-bottom:2%;'>
<div class="card" id='kit_row`+x+`'>
  <div class="card-body">
  <div class='order-tile-time-txt'>`+transaction_date+`</div>
   <div class='order-tile-time-txt-lg'>`+`Table: `+table_number+``+`</div>
  <div style='padding-bottom:2%;'>
	<div class='jse-divider-third'>`+qty+`</div>
	<div class='jse-divider-half'>`+product_name+`</div>
</div>
<div align='right'>
`+btn+`
</div>

 </div>

</div>
</div>
	`;
}

var row_cnt=$('#kit_order_cnt').val();

$('#kitchen-orders-content').html(str);

setTimeout(function(){


if(row_cnt!=n.length){
	$('#kit_row0').fadeOut().fadeIn().fadeOut().fadeIn();
	playAudio();
	$('#kit_order_cnt').val(n.length);
	window.navigator.vibrate(200);
}
else{
	pauseAudio();
}


},1000);



});

}









function kitchen_order_to_prepare(x){
var pid=$('#ko_pid'+x).val();
var order_id=$('#ko_order_id'+x).val();
var product_name=$('#ko_product_name'+x).val();
var qty=$('#ko_qty'+x).val();

SYS_confirm("Are you sure?","Prepare "+qty+" "+product_name+"?","warning","Yes","No",function(){
sweetAlertClose();  

$.ajax({
	url:base_url+"index.php/api/kitchen_order_change_item_stat",
	method:"POST",
	data:{ pid:pid, order_id:order_id, order_status:1 },
	success:function(data){ console.log(data);
		var n=JSON.parse(data);
		if(n.msg==""){
			load_kitchen_order_set();
		}
	},
	error:function(err){
	console.log(err);	
	}
});

});


}










function kitchen_preparing_order_set(){
var usertypeid=localStorage.getItem('user_userTypeId');



set_kitchen_orders(1,function(result){
var n=result;
var str="";
for(var x=0;x<n.length;x++){
var oid=n[x].oid;
var orderid=n[x].orderid;
var pid=n[x].pid;
var product_name=n[x].product_name;
var qty=n[x].qty;
var order_id=n[x].order_item_id;
var transaction_date=n[x].transaction_date;
var table_number=n[x].table_number;


var btn="";

if(usertypeid==7){ /* if usertype is waiter*/
btn=``;
}
else if(usertypeid==8){
btn=`<button class='btn btn-primary btn-sm' onclick='kitchen_order_for_serving(`+x+`)'>For Serving</button>`;
}
else{ 

btn=`<button class='btn btn-primary btn-sm' onclick='kitchen_order_for_serving(`+x+`)'>For Serving</button>`;	

}



str+=`
<input type='hidden' id='kp_oid`+x+`' value='`+oid+`' />
<input type='hidden' id='kp_orderid`+x+`' value='`+orderid+`' />
<input type='hidden' id='kp_pid`+x+`' value='`+pid+`' />
<input type='hidden' id='kp_order_id`+x+`' value='`+order_id+`' />
<input type='hidden' id='kp_product_name`+x+`' value='`+product_name+`' />
<input type='hidden' id='kp_qty`+x+`' value='`+qty+`' />
<div class='col-sm-12' style='margin-bottom:2%;'>
<div class="card" id='kit1_row`+x+`'>
  <div class="card-body">
  <div class='order-tile-time-txt'>`+transaction_date+`</div>
  <div class='order-tile-time-txt-lg'>`+`Table: `+table_number+``+`</div>
  <div style='padding-bottom:2%;'>
	<div class='jse-divider-third'>`+qty+`</div>
	<div class='jse-divider-half'>`+product_name+`</div>
</div>
<div align='right'>
`+btn+`
</div>

 </div>

</div>
</div>
	`;
}


$('#kitchen-prep-orders-content').html(str);


var row_cnt=$('#kit_preparing_cnt').val();

setTimeout(function(){


if(row_cnt!=n.length){
	$('#kit1_row'+(n.length-1)).fadeOut().fadeIn().fadeOut().fadeIn();
	playAudio();
	$('#kit_preparing_cnt').val(n.length);
	window.navigator.vibrate(200);
}else{
	pauseAudio();
}


},1000);




});	

}





function kitchen_order_for_serving(x){
var pid=$('#kp_pid'+x).val();
var order_id=$('#kp_order_id'+x).val();
var product_name=$('#kp_product_name'+x).val();
var qty=$('#kp_qty'+x).val();
SYS_confirm("Are you sure?","Serve "+qty+" "+product_name+"?","warning","Yes","No",function(){
sweetAlertClose();  

$.ajax({
	url:base_url+"index.php/api/kitchen_order_change_item_stat",
	method:"POST",
	data:{ pid:pid, order_id:order_id, order_status:2 },
	success:function(data){ console.log(data);
		var n=JSON.parse(data);
		if(n.msg==""){
			load_kitchen_order_set();
		}
	},
	error:function(err){
	console.log(err);	
	}
});

});	
}






function kitchen_for_serving_order_set(){
var usertypeid=localStorage.getItem('user_userTypeId');

set_kitchen_orders(2,function(result){
var n=result;
var str="";
for(var x=0;x<n.length;x++){
var oid=n[x].oid;
var orderid=n[x].orderid;
var pid=n[x].pid;
var product_name=n[x].product_name;
var qty=n[x].qty;
var order_id=n[x].order_item_id;
var transaction_date=n[x].transaction_date;
var table_number=n[x].table_number;

var btn="";

if(usertypeid==7){ /* if usertype is waiter*/
btn=`<button class='btn btn-primary btn-sm' onclick='kitchen_order_serve(`+x+`)'>Serve</button>`;
}
else if(usertypeid==8){ //kitch
btn=``;
}
else{ 
btn=`<button class='btn btn-primary btn-sm' onclick='kitchen_order_serve(`+x+`)'>Serve</button>`;	

}



str+=`
<input type='hidden' id='kf_oid`+x+`' value='`+oid+`' />
<input type='hidden' id='kf_orderid`+x+`' value='`+orderid+`' />
<input type='hidden' id='kf_pid`+x+`' value='`+pid+`' />
<input type='hidden' id='kf_order_id`+x+`' value='`+order_id+`' />
<input type='hidden' id='kf_product_name`+x+`' value='`+product_name+`' />
<input type='hidden' id='kf_qty`+x+`' value='`+qty+`' />
<div class='col-sm-12' style='margin-bottom:2%;'>
<div class="card" id='kit2_row`+x+`'>
  <div class="card-body">
  <div class='order-tile-time-txt'>`+transaction_date+`</div>
  <div class='order-tile-time-txt-lg'>`+`Table: `+table_number+``+`</div>
  <div style='padding-bottom:2%;'>
	<div class='jse-divider-third'>`+qty+`</div>
	<div class='jse-divider-half'>`+product_name+`</div>
</div>
<div align='right'>
`+btn+`
</div>

 </div>

</div>
</div>
	`;
}




$('#kitchen-for-serving-orders-content').html(str);
$('#menusetcont_forservingtab3_counter').text(n.length);
var row_cnt=$('#kit_for_serving_cnt').val();

setTimeout(function(){

if(row_cnt!=n.length){
	$('#kit2_row'+(n.length-1)).fadeOut().fadeIn().fadeOut().fadeIn();
	playAudio();
	$('#kit_for_serving_cnt').val(n.length);
	window.navigator.vibrate(200);
}else{
	pauseAudio();
}


},1000);











});	

}




function kitchen_order_serve(x){

	var pid=$('#kf_pid'+x).val();
var order_id=$('#kf_order_id'+x).val();
var product_name=$('#kf_product_name'+x).val();
var qty=$('#kf_qty'+x).val();
SYS_confirm("Are you sure?","Serve "+qty+" "+product_name+"?","warning","Yes","No",function(){
sweetAlertClose();  

$.ajax({
	url:base_url+"index.php/api/kitchen_order_change_item_stat",
	method:"POST",
	data:{ pid:pid, order_id:order_id, order_status:3 },
	success:function(data){ console.log(data);
		var n=JSON.parse(data);
		if(n.msg==""){
			load_kitchen_order_set();
		}
	},
	error:function(err){
	console.log(err);	
	}
});

});	
}















function set_kitchen_orders(order_status,funct){
var brid=localStorage.getItem("pos_initial_brid");  /*branchid*/

$.ajax({
	url:base_url+"index.php/api/kitchen_orders_api",
	method:"POST",
	data:{ brid:brid, order_status:order_status },
	success:function(data){ 
		//funct(JSON.parse(data));
		funct(data);

	},
	error:function(err){
		console.log(err);
	}
});


}




