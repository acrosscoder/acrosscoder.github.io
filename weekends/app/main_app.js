$(document).ready(function(){
$('#bottom-nv3').show();
mediaquery(function(){
console.log("No Show");
$('#bottom-nv3').hide();
},function(){
$('.menusetcont').show();
$('.menusetcont_tab').attr("class","jse-tab-panel menusetcont_tab");
$('#menusetcont_tab1').attr("class","jse-tab-panel initial menusetcont_tab");
console.log("Show");
$('#bottom-nv3').show();
},"1026px");



});


$(window).resize(function() {

mediaquery(function(){
console.log("No Show");
$('#bottom-nv3').hide();
},function(){
$('.menusetcont').show();
$('.menusetcont_tab').attr("class","jse-tab-panel menusetcont_tab");
$('#menusetcont_tab1').attr("class","jse-tab-panel initial menusetcont_tab");
$('#bottom-nv3').show();


},"1026px");

});



function mediaquery(funct1,funct2,max_width){
var mq = window.matchMedia("(max-width: "+max_width+")");
 if (mq.matches) { // If media query matches
  funct1();
  } else {
   funct2();
  }

}




function category_clicked(){
  mediaquery(function(){

menusetcont(2);

  },function(){
},"1026px");
}
/************************/


function main_app(){
person_details();

setTimeout(function(){
var usertypeid=localStorage.getItem('user_userTypeId');
if(usertypeid==7){ /* if usertype is waiter*/
take_order();
}
else if(usertypeid==8){
kitchen_app();
}
else{ //if admin,cashier etch
menu_items();	
}
person_details();



},1000);
   
}



function tbl_locations_data(){
var brid=localStorage.getItem("pos_initial_brid");

$.ajax({
  url:base_url+"index.php/api/tbl_locations_data",
  method:"POST",
  data:{brid:brid},
  success:function(data){
    var n=JSON.parse(data);
    localStorage.setItem('tbl_locations',data);
    var tlid=(n.length==0)?"":n[0].tlid;
    localStorage.setItem('tbl_initial_tlid',tlid);
  },
  error:function(err){
    console.log(err);
  }
});

}


function progressbar(){
return `
<div class="progress md-progress" id='loader' style=' display:none; position:fixed; z-index:10000; top:0;'>
    <div id='loaderbar' class="progress-bar bg-success" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
`;
}

function header(){
return `
    <header>
      <!-- Navbar -->
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar indigo">

            <!-- SideNav slide-out button -->
            <!-- Breadcrumb-->
            <div class="breadcrumb-dn " style='padding-left:1%;'>
               <!-- <img src="../resources/letran.png">-->
            </div>


<a class="nav-link waves-effect waves-light  ml-auto" data-toggle="tooltip" data-placement="bottom" title="Dashboard" onclick='main_app()'>
                            <i class="fa fa-th text-white" aria-hidden="true"></i>
                            </a>

<a class="nav-link waves-effect waves-light ">
                             <i class="fa fa-bell text-white" aria-hidden="true"></i>
                            </a>


            <ul class="nav navbar-nav nav-flex-icons">
               
                <li class="nav-item dropdown">
                    <a class="nav-link text-white" style='border:solid 1px rgba(255,255,255,0.5);' href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Hi <span id='name_of_user'></span> !
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#" onclick='logout_process();'>Logout</a>
                       
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.Navbar -->
    </header>

`;

}


function header2(){
return `
    <header>
      <!-- Navbar -->
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar indigo">

            <!-- SideNav slide-out button -->
            <!-- Breadcrumb-->
            <div class="breadcrumb-dn " style='padding-left:1%;'>
               <!-- <img src="../resources/letran.png">-->
            </div>


<a class="nav-link waves-effect waves-light  ml-auto" data-toggle="tooltip" data-placement="bottom" title="Dashboard" onclick='table_orders_app()'>
                            <i class="fa fa-arrow-left text-white" aria-hidden="true"></i>
                            </a>

<a class="nav-link waves-effect waves-light ">
                             <i class="fa fa-bell text-white" aria-hidden="true"></i>
                            </a>


            <ul class="nav navbar-nav nav-flex-icons">
               
                <li class="nav-item dropdown">
                    <a class="nav-link text-white" style='border:solid 1px rgba(255,255,255,0.5);' href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Hi <span id='name_of_user'></span> !
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#" onclick='logout_process();'>Logout</a>
                       
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.Navbar -->
    </header>

`;

}





function header_sidebar(){
	return `
	<header>
        <!-- Sidebar navigation -->
        <div id="slide-out" class="side-nav white" >
            <ul class="custom-scrollbar white">
                <!-- Logo -->
                <li>
                    <div class="logo-wrapper waves-light">
                        <a href="#"><!--<img src="../resources/arribaletran.png" class="img-fluid flex-center">--></a>
                    </div>
                </li>
                <!--/. Logo -->
             
             
                <!-- Side navigation links -->
                <li>
                    <ul class="collapsible collapsible-accordion">
                        <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-chevron-right"></i> Transactions<i class="fa fa-angle-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul class="list-unstyled">
                                    <li><a href="#" class="waves-effect" onclick='take_order()'>Transact New Table</a>
                                    </li>
                                    <li><a href="#" class="waves-effect">Sample Menu</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-chevron-right"></i> Instruction<i class="fa fa-angle-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul class="list-unstyled">
                                    <li><a href="#" class="waves-effect">Sample Menu</a>
                                    </li>
                                    <li><a href="#" class="waves-effect">Sample Menu</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-chevron-right"></i> About<i class="fa fa-angle-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul class="list-unstyled">
                                    <li><a href="#" class="waves-effect">Sample Menu</a>
                                    </li>
                                    <li><a href="#" class="waves-effect">Sample Menu</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
              
                    </ul>
                </li>
                <!--/. Side navigation links -->
            </ul>
            <div class="sidenav-bg mask-strong white"></div>
        </div>
        <!--/. Sidebar navigation -->








        <!-- Navbar -->
        <nav class="navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar indigo">


            <!-- SideNav slide-out button -->
            <div class="float-left">
                <a href="#" data-activates="slide-out" class="button-collapse"><i  style='color:#fff; font-size:25px;' class="fa fa-bars"></i></a>
            </div>
            <!-- Breadcrumb-->
            <div class="breadcrumb-dn " style='padding-left:1%;'>
               <!-- <img src="../resources/letran.png">-->
            </div>



<a class="nav-link waves-effect waves-light  ml-auto" data-toggle="tooltip" data-placement="bottom" title="Dashboard" onclick='main_app()'>
                            <i class="fa fa-th text-white" aria-hidden="true"></i>
                            </a>

<a class="nav-link waves-effect waves-light ">
                             <i class="fa fa-bell text-white" aria-hidden="true"></i>
                            </a>



                         



            <ul class="nav navbar-nav nav-flex-icons">
               
                <li class="nav-item dropdown">
                    <a class="nav-link text-white" style='border:solid 1px rgba(255,255,255,0.5);' href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       Hi <span id='name_of_user'></span> !
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#" onclick='logout_process();'>Logout</a>
                       
                    </div>
                </li>
            </ul>
        </nav>
        <!-- /.Navbar -->
    </header>`;
}


/*----------------------------------------------------------*/

































function generate_menu(){
var userTypeId=localStorage.getItem('user_userTypeId');

$.ajax({
    url:"menu.json",
     type:"GET",
    success:function(data){
        var n=data.menu;
        for(var x=0;x<n.length;x++){
            var usertypeid1=n[x].userTypeId;
            if(usertypeid1==userTypeId){
                var nn=n[x].menu_name;
                var str="";
                for(var y=0;y<nn.length;y++){
                    var name=nn[y].name;
                    var funct=nn[y].function;

                    var icon_class="";
                    if(name=="DINE IN"){ icon_class="jicon-dine-in"; }
                   
                    else if(name=="TAKE OUT"){ icon_class="jicon-takeout";  }
                    else if(name=="ORDER STATUS"){  icon_class="jicon-status"; }
                    else if(name=="PAYOUT"){ icon_class="jicon-payout"; }
                      else if(name=="ADMIN"){ icon_class="jicon-admin";  }
                        else if(name=="VIP"){ icon_class="jicon-vip"; }







                    var str1="";
                    if(name=="DINE IN"){

                    str1+=`<div  class='jse-table-tile-container'>
                       <div class='jse-table-tile-texts-menu' >Table Available: <span id='di_total_vacant'>0</span></div>
                       <div class='jse-table-tile-texts-menu'>Table Occupied: <span id='di_total_ocupied'>0</span></div>     
                    </div>
                    `;
                    }

                    str+=`

                    <div class='col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                    <a href='#' onclick='`+funct+`'>
                                <div class='jse-tile waves-effect'>
                                <div class='jse-tile-body1'><div style='padding:3%;' align='center'><span style='font-size:90px; color:#fff;' class='`+icon_class+`'></span></div></div>
                                <div class='jse-tile-body2'>
                               <span class='jse-tile-txt'>`+name+`</span><br>
                                
                             `+str1+`

                                </div>
                                </div>
                     </a>
                    </div>

                    `;

                }
                $('#mm_menucont').html(str);


                setTimeout(function(){
                  setTableAvailability();

                },1000);



            }
        }
    },
    error:function(err){
        console.log(err);
    }
});

}


function setTableAvailability(){
var brid=localStorage.getItem("pos_initial_brid");
$.ajax({
  url:base_url+"index.php/api/dine_in_table_availability",
  method:"POST",
  data:{brid:brid},
  success:function(data){
    var n=JSON.parse(data);

    $('#di_total_ocupied').text(n.total_occupied);
    $('#di_total_vacant').text(n.total_vacant);

  },
  error:function(err){
    console.log(err);
  }

});

}

































function menu_items(){
	var str=`
`+progressbar()+`
 <!--Double navigation-->`+header()+`<!--/.Double navigation-->
<main>
<div class='container'>
    <div style='margin-top:90px;' >
        <div class='row' style='padding-top:5%;' id='mm_menucont'></div>
    </div>
</div>
</main>
`;

$('body').html(str);
setTimeout(function(){ tool_init(); generate_menu(); },1000);

}




























function table_menu_items(){
var brid=localStorage.getItem("pos_initial_brid");
var tlid=localStorage.getItem('tbl_initial_tlid');

$.ajax({
    url:base_url+"index.php/api/tables_api",
     method:"POST",
     data:{brid:brid, tlid:tlid },
    success:function(data){ 
console.log(data);
//var nn=JSON.parse(data);
var nn=data;
        var n=nn.tbl_menu;
        var n1=nn.locations;

        
        var str="";
        for(var x=0;x<n.length;x++){
          var tablenum=n[x].tablenum;
          var id=n[x].id;
          
          var customer_name=n[x].customer_name;
          var order_served=n[x].order_served;
          var order_preparing=n[x].order_preparing;
          var running_bill=n[x].running_bill; 

          var tbl_status=n[x].tbl_status;

          var bgcolor=(tbl_status==0)?"":"background:#00C851;";
          /*dine_in_app(`+x+`)*/
          str+=`
          <div class='col-lg-3 col-md-4'>
          <input type='hidden' id='tbl_menu_num`+x+`' value='`+tablenum+`' />
          <input type='hidden' id='tbl_menu_tnid`+x+`' value='`+id+`' />
          <a href='#' onclick='table_orders_app(`+x+`)'>
      <div class='jse-tile waves-effect' >
        <div class='jse-tile-body1' style='`+bgcolor+`'><center><span class='jse-tile-number'>`+tablenum+`</span></center></div>
          <div class='jse-tile-body2'>
                <div class='jse-table-tile-tbl-title' align='center'>TABLE</div>
                  <div  class='jse-table-tile-container'>
                    <div class='jse-table-tile-texts' >Customer Name: `+customer_name+`</div>
                    <div class='jse-table-tile-texts'>Order Served: `+order_served+`</div>
                    <div class='jse-table-tile-texts'>Order Preparing: `+order_preparing+`</div>
                    <div class='jse-table-tile-texts'>Running Bill: `+running_bill+`</div>
                  </div>

          </div>
      </div>
      </a>
</div>

          `;
        }
        $('#tblmenucont').html(str);
    },
    error:function(err){
        console.log(err);
    }
});



}













function take_order(){
var str=`
`+progressbar()+`
 <!--Double navigation-->`+header()+`<!--/.Double navigation-->
<main>
<div class='container'>
  
  <div style='margin-top:90px;' >
    <div class='row' style='padding-top:5%; padding-bottom:20%;' id='tblmenucont'></div>
  </div>
</div>
</main>

`+table_menu_bottom_menu()+`


`;

$('body').html(str);

setTimeout(function(){ tool_init(); table_menu_items(); },1000);

}


function table_menu_bottom_menu(){

var str="";



str+=`


<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
    <a href='#' class='js-bottom-txt' onclick='waiter_view_orders()'>
    <div align='center'><i class='fa fa-list'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Orders</div>
    </a>
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
    <a href='#' class='js-bottom-txt' onclick='set_table_locations()'>
    <div align='center'><i class='fa fa-wrench'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Table Location</div>
    </a>



  <a href='#' class='js-bottom-txt' style='display:none;'>
      <div align='center'>
      <i class='fa fa-desktop'></i><span class="badge red" style='position:absolute; top:0;'>10</span>
      </div>
      <div class='jse-tile-txt-item1' align='center'>For Serving</div>
      </a>
  





   </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id='' style=''>
    
  </div>

</div>


</div>
</div>
`;


return str;
}


function set_table_locations(){




  setNewModal('orderedit_quizmodal');
$('#orderedit_quizmodal').modal('show');
$('#orderedit_quizmodal_title').text("Choose Table Location");


var n=JSON.parse(localStorage.getItem("tbl_locations"));
var str1="";
for(var x=0;x<n.length;x++){
  str1+=`
<tr>
<td>`+(x+1)+`
<input type='hidden' id='tbl_tl_tlid`+x+`' value='`+n[x].tlid+`'/>
</td>
<td>`+n[x].locationname+`</td>
<td align='center'><a href='#' onclick='change_tbl_location(`+x+`)' style='width:100%;'><i class='fa fa-arrow-right'></i></a></td>
</tr>
  `;
}



  
var str=`
<div class='container'>
<div class='row'>
<div class='col'>
<div class='table-responsive'>
<table class='table table-bordered'>
<thead>
<tr>
<th style='width:2%;'>#</th>
<th style='width:50%;'>Table Location</th>
<th style='width:30%;'>Select</th>
</tr>
</thead>
<tbody>`+str1+`</tbody>
</table>
</div>
</div>
</div>


</div>
  `;

  $('#orderedit_quizmodal_body').html(str);

}

function change_tbl_location(x){
  var tlid=$('#tbl_tl_tlid'+x).val();
  localStorage.setItem("tbl_initial_tlid",tlid);
  table_menu_items();
  $('#orderedit_quizmodal').modal('hide');
}


function dine_in_category_item__options(){

var icons=[
"jicon-burger",
"jicon-beef",
"jicon-beverages",
"jicon-burger",
"jicon-pasta",
"jicon-pasta",
"jicon-dessert",
"jicon-vegetables",
"jicon-pizza",
"jicon-pork",
"jicon-pasta",
"jicon-chicken",
"jicon-appetizer",
"jicon-coffee",
"jicon-sandwich",
"jicon-appetizer"

];


$.ajax({
    url:base_url+"index.php/api/category_api",
    success:function(data){
        localStorage.setItem("category_data",data);
        var n=JSON.parse(data);


  var str="";

for(var x=0;x<n.length;x++){
    var catnum=n[x].catnum;
      var catid=n[x].catid;
    var iconn=(icons[catnum])?icons[catnum]:"jicon-burger";
  str+=`
  <div class='col-lg-6 col-md-4 col-sm-3 jcol-xs-3'>
    <a href='#' onclick='dine_in_item_options(`+x+`); category_clicked();'>
    <input type='hidden' id='pi_catid`+x+`' value='`+catid+`'/>
       <div class='jse-tile-sm waves-effect' >
       <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:90px; color:#000;' class='`+iconn+`'></span></div></div>
       <div class='jse-tile-body21'>
       <span class='jse-tile-txt'>`+n[x].category+`</span><br>
       </div>
       </div>
    </a>
</div>
  `;
}
$('#dine-in-category-content').html(str);

    },
    error:function(err){
        console.log(err);
        var n=JSON.parse(localStorage.getItem("category_data"));

  var str="";

for(var x=0;x<n.length;x++){
    var catnum=n[x].catnum;
    var catid=n[x].catid;
    var iconn=(icons[catnum])?icons[catnum]:"jicon-burger";
  str+=`
  <div class='col-lg-6 col-md-4 col-sm-3 jcol-xs-3'>
    <a href='#' onclick='dine_in_item_options(`+x+`); '>
    <input type='hidden' id='pi_catid`+x+`' value='`+catid+`'/>
       <div class='jse-tile-sm waves-effect' >
       <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:90px; color:#000;' class='`+iconn+`'></span></div></div>
       <div class='jse-tile-body21'>
       <span class='jse-tile-txt'>`+n[x].category+`</span><br>
       </div>
       </div>
    </a>
</div>
  `;
}
$('#dine-in-category-content').html(str);
    }
});



}



















function dine_in_item_options(x){
var brid=localStorage.getItem("pos_initial_brid");
var catid=$('#pi_catid'+x).val();


var str="";

$.ajax({
  url:base_url+"index.php/api/product_category_api",
  method:"POST",
  data:{brid:brid,catid:catid},
  success:function(data){ console.log(data);
    var n=JSON.parse(data);

for(var x=0;x<n.length;x++){
  var locations=(n[x].location)?"<img style='width:100%;' src='"+base_url+""+n[x].location+"'/>":"<span style='font-size:90px; color:#000;' class='jicon-coffee'></span>";
  var name=n[x].product_name;
  var pid=n[x].pid;
  var idata=JSON.stringify(n[x]);
  var amount=formatCurrency(n[x].amount);
  str+=`
  <div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
                    <a href='#' onclick='add_item_to_orders(`+x+`)'>

                   <input type='hidden' id='prod_items_idata`+x+`' value='`+idata+`' />
                                <div class='jse-tile-sm waves-effect' >
                                <div class='jse-tile-body11'><div style='padding:3%;' align='center'>`+locations+`</div></div>
                                <div class='jse-tile-body21' style='padding:2%;'>
                                    <div style='padding:2%; width:100%;'><span class='jse-tile-txt-item1'>`+name+`</span></div>
                                    <div style='padding:2%; width:100%;'><span class='jse-tile-txt-item1'>Php `+amount+`</span></div>
                                </div>
                                </div>
                     </a>
                    </div>
  `;
}

$('#dine-in-product-content').html(str);



  },
  error:function(err){
    console.log(err); toastr.error("Network Problem Occured");
  }
});




  
}






function add_item_to_orders(x){
var str="";
var cnt=parseInt($('#orders_tbl_cnt').val());
var n=JSON.parse($('#prod_items_idata'+x).val());
if(n){
  var pid=n.pid;
  var product_name=n.product_name;
  var amount=n.amount;
str+=`
<tr id='tbl_pio_row`+cnt+`' onclick='pio_select(`+cnt+`)'>
<td class='waves-effect'>
<input type='hidden' id='tbl_pio_secected`+cnt+`' value='0' />
<input type='hidden' id='tbl_pio_visibility`+cnt+`' value='1' />
<input type='hidden' id='tbl_pio_pid`+cnt+`' value='`+pid+`' />
<input type='hidden' id='tbl_pio_productname`+cnt+`' value='`+product_name+`' />
<input type='hidden' id='tbl_pio_amount`+cnt+`' value='`+amount+`' />
<input type='hidden' id='tbl_pio_qty`+cnt+`' value='1' />
</td>
<td class='waves-effect'>`+product_name+`</td>
<td class='waves-effect'><span id='tbl_pio_disp_qty`+cnt+`'>1</span></td>
<td class='waves-effect'><span >`+formatCurrency(amount)+`</span></td>
<td class='waves-effect'><b><span id='tbl_pio_total`+cnt+`'>`+formatCurrency(amount)+`</span></b></td>
</tr>
`;

}

cnt+=1;
$('#orders_tbl_cnt').val(cnt);
$('#pi_orders_tbl tbody').append(str);
setTimeout(function(){ pio_compute_order_total(); },500);
}


/*
function pio_compute_order_total(){
var cnt=parseInt($('#orders_tbl_cnt').val());
var tot=0;
var item_tot=0;
for(var x=0;x<cnt;x++){
  if($('#tbl_pio_visibility'+x).val()==1){
    var amount=($('#tbl_pio_amount'+x).val()).replace(/[,]+/g,"");
    var qty=$('#tbl_pio_qty'+x).val();
    var total=parseFloat(amount)*parseInt(qty);
    $('#tbl_pio_total'+x).text(formatCurrency(total));
    tot+=total;
    item_tot+=1;

  }
}


$('#pio_total_amount').text(formatCurrency(tot));
$('#menusetcont_tab3_counter').text(item_tot);


}
*/

function pio_compute_order_total(){
var cnt=parseInt($('#orders_tbl_cnt').val());
var tot=0;
var item_tot=0;
for(var x=0;x<cnt;x++){
  if($('#tbl_pio_visibility'+x).val()==1){
    var amount=($('#tbl_pio_amount'+x).val()).replace(/[,]+/g,"");
    var qty=$('#tbl_pio_qty'+x).val();
    var total=parseFloat(amount)*parseInt(qty);
    $('#tbl_pio_total'+x).text(formatCurrency(total));
    tot+=total;
    item_tot+=1;

  }
}

var discountamount=($("#pio_discount_amount").text()).replace(/[,]+/g,"");
var amount_due=(discountamount)?(tot-parseFloat(discountamount)):tot;
$('#pio_amount_due').text(formatCurrency(amount_due));

$('#pio_total_amount').text(formatCurrency(tot));
$('#menusetcont_tab3_counter').text(item_tot);

var total_paid=parseFloat($('#pio_total_payment').val());
var balance=amount_due-total_paid;
$('#pio_payment_balance').text(formatCurrency(balance));
}







function pio_select(x){
  var selected=$('#tbl_pio_secected'+x).val();
  if(selected==0){
    $('#tbl_pio_row'+x).css({'background':'#e3f2fd'});
    $('#tbl_pio_secected'+x).val(1);
  }
  else{
    $('#tbl_pio_row'+x).css({'background':'#fff'});
    $('#tbl_pio_secected'+x).val(0);
  }
}


/*DINE IN*/

function dine_in_categoryoptions(){

return `
<div style='width:100%; padding-left:7%; padding-right:7%;  padding-top:5%; background:#fff;  padding-bottom:100px;' class='jse-fill-height jse-croll-ynotx menu-scroll'>
<div class='row' id='dine-in-category-content'>
</div>
</div>
`;

}



function dine_in_productoptions(){

return `
<div style='width:100%; float:left; padding-left:7%;  padding-top:5%; padding-right:7%; background:#fff;  padding-bottom:100px;' class='jse-fill-height jse-croll-ynotx menu-scroll'>
<div class='row' id='dine-in-product-content'>
</div>
</div>
`;

}







function order_payment_button_authorization(){
var usertypeid=localStorage.getItem('user_userTypeId');
var str="";
if(usertypeid==7){ /* if usertype is waiter */
str=`
<div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
    <a href='#' onclick='cancel_pio_order_edit_qty()'>
      <div class='jse-tile-sm jse-tile-color1 waves-effect blue darken-1 text-white' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#fff;'><i class='fa fa-edit'></i></span></div></div>
        <div  style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord'>EDIT QTY</span><br>
        </div>
     </div>
    </a>
</div>

<div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
    <a href='#' onclick='cancel_pio_order_items()'>
      <div class='jse-tile-sm waves-effect blue darken-1 text-white' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#fff;'><i class='fa  fa-trash-o'></i></span></div></div>
        <div class='' style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord'>CANCEL ITEM/S</span><br>
        </div>
     </div>
    </a>
</div>

<div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
<a href='#' onclick='process_order()'>
      <div class='jse-tile-sm waves-effect blue darken-1 text-white' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#fff;'><i class='fa fa-send-o'></i></span></div></div>
        <div class='' style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord'>ORDER</span><br>
        </div>
     </div>
    </a>

</div>





`;
}
else{
str=`
<div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
    <a href='#' onclick='cancel_pio_order_edit_qty()'>
      <div class='jse-tile-sm jse-tile-color1 waves-effect blue darken-1 text-white' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#fff;'><i class='fa fa-edit'></i></span></div></div>
        <div  style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord'>EDIT QTY</span><br>
        </div>
     </div>
    </a>
</div>

<div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
    <a href='#' onclick='cancel_pio_order_items()'>
      <div class='jse-tile-sm waves-effect blue darken-1 text-white' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#fff;'><i class='fa  fa-trash-o'></i></span></div></div>
        <div class='' style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord'>CANCEL ITEM/S</span><br>
        </div>
     </div>
    </a>
</div>

<div class='col-lg-4 col-md-4 col-sm-4 jcol-xs-4'>
<a href='#' onclick='process_order()'>
      <div class='jse-tile-sm waves-effect blue darken-1 text-white' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#fff;'><i class='fa fa-send-o'></i></span></div></div>
        <div class='' style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord'>ORDER</span><br>
        </div>
     </div>
    </a>

</div>
`;
}
return str;
}



function cancel_pio_order_items(){

SYS_confirm("Are you sure?","Cancelling Items","warning","Yes","No",function(){
sweetAlertClose();  


var cnt=parseInt($('#orders_tbl_cnt').val());
for(var x=0;x<cnt;x++){
  if($('#tbl_pio_visibility'+x).val()==1){
    if($('#tbl_pio_secected'+x).val()==1){
      $('#tbl_pio_row'+x).hide();
      $('#tbl_pio_visibility'+x).val(0);
      $('#tbl_pio_secected'+x).val(0);
    }
  }
}

setTimeout(function(){ pio_compute_order_total(); },500);
});



}


function cancel_pio_order_edit_qty(){

setNewModal('orderedit_quizmodal');


var orderlist=$('#menusetcont_tab3_counter').text();

if(orderlist==0){ toastr.warning("No Items to edit"); }
else{

$('#orderedit_quizmodal').modal('show');
$('#orderedit_quizmodal_title').text("Edit Quantity");
  

var items="";
var cnt=parseInt($('#orders_tbl_cnt').val());

if(cnt==0){

  items+="<tr><td colspan='3'>No item selected from order</td></tr>";
}

var z=0;
for(var x=0;x<cnt;x++){
  if($('#tbl_pio_visibility'+x).val()==1){
    if($('#tbl_pio_secected'+x).val()==1){
  

var pid=$('#tbl_pio_pid'+x).val();
var product_name=$('#tbl_pio_productname'+x).val();
var qty=$('#tbl_pio_qty'+x).val();

  items+=`
  <tr>
  <td>
  <input type='hidden' id='tbl_pio_ordertbl_rwnum`+z+`' value='`+x+`' />
  <input type='hidden' id='tbl_pio_pid`+z+`' value='`+pid+`' />
  `+(z+1)+`
  </td>
  <td>`+product_name+`</td>
  <td>



<div class="input-group">
   <input type='number' min='1'  class='form-control' id='tbl_pio_edit_qty`+z+`' value='`+qty+`' />
  <div class="input-group-append">
    <span class="input-group-text md-addon" id="basic-addon" style='background:#fff;'>
  
    <a href='#' class='btn btn-sm btn-primary waves-effects' onclick='order_qty_plus(`+z+`)' >
      <i style class='fa fa-plus'></i>
      </a>
    <a href='#' class='btn btn-sm btn-primary waves-effects' onclick='order_qty_minus(`+z+`)' >
     <i style class='fa fa-minus'></i>
    
    </a>
    </span>
  </div>
</div>



  </td>
  </tr>
  `;

z+=1;

    }
  }
}






var str=`
<div class='container'>
<div class='row'>
<div class='col'>
<div class='table-responsive'>
<table class='table table-bordered'>
<thead>
<tr>
<th style='width:2%;'>#</th>
<th style='width:50%;'>Item</th>
<th style='width:30%;'>Qty.</th>
</tr>
</thead>
<tbody>`+items+`</tbody>
</table>
</div>
<input type='hidden' id='tbl_editqty_cnt' value='`+z+`' />
</div>
</div>
<div class='row'>
<div class='col-sm-12' align='right'>
<button class='btn btn-success' onclick='edit_qty_update_order_tbl()'>Done</button>
</div>
</div>

</div>
  `;

$('#orderedit_quizmodal_body').html(str);

}


}


function order_qty_plus(z){
var cnt=($('#tbl_pio_edit_qty'+z).val())?parseInt($('#tbl_pio_edit_qty'+z).val()):0;
cnt+=1;
$('#tbl_pio_edit_qty'+z).val(cnt);
}
function order_qty_minus(z){
var cnt=($('#tbl_pio_edit_qty'+z).val())?parseInt($('#tbl_pio_edit_qty'+z).val()):0;
cnt-=1;
if(cnt<1){cnt=1; }
$('#tbl_pio_edit_qty'+z).val(cnt);
}


function resetOrderTable(){
var cnt=parseInt($('#orders_tbl_cnt').val());
for(var x=0;x<cnt;x++){
       $('#tbl_pio_row'+x).css({'background':'#fff'});
    $('#tbl_pio_secected'+x).val(0);
}
}

function edit_qty_update_order_tbl(){
  var cnt=parseInt($('#tbl_editqty_cnt').val());
  for(var x=0;x<cnt;x++){
    var row=$('#tbl_pio_ordertbl_rwnum'+x).val();
    var qty=$('#tbl_pio_edit_qty'+x).val();
    $('#tbl_pio_disp_qty'+row).text(qty);
    $("#tbl_pio_qty"+row).val(qty);



  }

resetOrderTable();


   $('#orderedit_quizmodal').modal('hide');
   setTimeout(function(){ pio_compute_order_total(); },500);

}




function process_order(){
var brid=localStorage.getItem("pos_initial_brid");  /*branchid*/
var tnid=localStorage.getItem("current_tnid");  /*tablenumber id*/
var customername=localStorage.getItem("current_customer");
var user_accountid=localStorage.getItem("user_accountid");

var total_amount=($('#pio_total_amount').text()).replace(/[,]+/g,"");


var cnt=parseInt($('#orders_tbl_cnt').val());
var pid=[]; var z=0;
var amount=[];
var qty=[];
for(var x=0;x<cnt;x++){
  if($('#tbl_pio_visibility'+x).val()==1){
   pid[z]=$('#tbl_pio_pid'+x).val();
   amount[z]=$('#tbl_pio_amount'+x).val();
   qty[z]=$("#tbl_pio_qty"+x).val();
   z+=1;
  }
}


SYS_confirm("Are you sure?","","warning","Yes","No",function(){
sweetAlertClose();  

$.ajax({
  url:base_url+"index.php/api/process_waiter_order",
  method:"POST",
  data:{
    brid:brid,
    tnid:tnid,
    customername:customername,
    pid:pid,
    amount:amount,
    qty:qty,
    user_accountid:user_accountid,
    total_amount:total_amount
  },
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){
      

      table_orders_app();
      setTimeout(function(){
        toastr.success("Order Added");
      },500);
    }
    else{
      toastr.error(n.msg);
    }

  },
  error:function(err){
    console.log(err);
  }

});

});


}




function customer_form(){
  setNewModal('customerform_modal');
$('#customerform_modal').modal('show');
$('#customerform_modal_title').text("Customer");
  

var str=`
<div class='container'>
<div class='row'>
<div class='col'>
<label>Customer Name</label>
<div class="md-form">
<input type='text' id='form_customername' class='form-control' placeholder='Input Customer Name'/>
</div>
</div>
</div>
<div class='row'>
<div class='col' align='right'>
<button class='btn btn-success' onclick='customer_form_add()'>Done</button>
</div>
</div>


</div>
  `;

$('#customerform_modal_body').html(str);



}

function customer_form_add(){
  var customername=$('#form_customername').val();
  localStorage.setItem("current_customer",customername);
$('#order_tbl_customer_name').text("Customer: "+customername);
$('#customerform_modal').modal('hide');

}

/*********************************/


function din_in_order_payout(){
var tablenum=localStorage.getItem("current_table_num");
return `
<div style='width:100%; float:left; padding-left:7%; padding-top:5%; padding-right:7%; background:#fff;  padding-bottom:100px;' class='jse-fill-height jse-croll-ynotx menu-scroll'>
<div class='row' id='dine-in-order_payput' style='padding-bottom:100px;'>
<div align='center' class='jse-head-tbl_title' id='current_tbl_name' style='width:100%;'>`+"TABLE NO. "+tablenum+`</div>
<div>
<input type='hidden' id='din_order_curstomername' value=''/>
<div id='din_order_customer' class='din_order_customer' style='font-size:17px;'></div>
</div>

<table class='table table-bordered table-condensed' id='pi_orders_tbl'>
<thead>
<tr>
<th>#</th>
<th>Item</th>
<th>Qty.</th>
<th>Price</th>
<th>Total</th>
</tr>
</thead>
  <tbody>
  </tbody>
<tfoot>
<tr>
<th colspan='4'>TOTAL</th>
<th><span id='pio_total_amount'>0.00</span></th>
</tr>
</tfoot>
</table>


<input type='hidden' id='orders_tbl_cnt' value='0'/>
<div style='width:100%; padding-left:7%; padding-right:7%; ' class=''>
<div class='row' id='order_payment_form_cont' align='right'>
  `+order_payment_button_authorization()+`
</div>
</div>

</div>
</div>
`;

    
}






function view_order(x){
var orderid=$('#so_orderid'+x).val();
var item_data=JSON.parse($('#so_item_data'+x).val());

setNewModal('orderedit_quizmodal');
$('#orderedit_quizmodal').modal('show');
$('#orderedit_quizmodal_title').text("Order Items");
  
var str1="";
for(var y=0;y<item_data.length;y++){
var ostat="";
var orderstat=item_data[y].order_status;
if(orderstat==0){ ostat="Pending"; }
if(orderstat==1){ ostat="Preparing"; }
else if(orderstat==2){ ostat="For Serving"; }
else if(orderstat==3){ ostat="Served"; }


str1+=`
<tr>
<td>`+item_data[y].qty+`</td>
<td>`+item_data[y].product_name+`</td>
<td>`+ostat+`</td>
</tr>
`;
}



var str=`
<div class='container'>
<table class='table table-bordered'>
<thead>
<tr>
<th>QTY.</th>
<th>Item</th>
<th>Status</th>
</tr>
</thead>
<tbody>`+str1+`</tbody>
</table>
<!--
<div class='row'>
<div class='col-sm-12' align='right'><button onclick='cancel_order(`+orderid+`)' class='btn btn-primary'><i class='fa fa-trash'></i> Cancel Order</button> </div>
</div>
-->

</div>
  `;

$('#orderedit_quizmodal_body').html(str);


}


function cancel_order(orderid){

}



function set_orders(){
var brid=localStorage.getItem("pos_initial_brid");  /*branchid*/
var tnid=localStorage.getItem("current_tnid");

$.ajax({
  url:base_url+"index.php/api/orders_transactions_api",
  method:"POST",
  data:{ brid:brid, tnid:tnid },
  success:function(data){ console.log(data);
    var nn=JSON.parse(data);
    var customer_name=nn.customer_name;
    localStorage.setItem("current_customer",customer_name);
    $('#order_tbl_customer_name').text("Customer: "+customer_name);

    var n=nn.data;

var str="";

str+=`


<div class='col-lg-3 col-md-4 col-sm-4 jcol-xs-4'>
    <a href='#' onclick='dine_in_app()'>
      <div class='jse-tile-sm jse-tile-color1 waves-effect  blue-grey lighten-5' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#000;'><i class='fa fa-plus'></i></span></div></div>
        <div  style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord2'>Add Order</span><br>
        </div>
     </div>
    </a>
</div>
`;


for(var x=0;x<n.length;x++){
var orderid=n[x].orderid;
var item_data=n[x].item_data;


str+=`

<div class='col-lg-3 col-md-4 col-sm-4 jcol-xs-4'>
    <a href='#' onclick='view_order(`+x+`)' >
    <input type='hidden' id='so_orderid`+x+`' value='`+orderid+`'/>
    <input type='hidden' id='so_item_data`+x+`' value='`+item_data+`'/>
      <div class='jse-tile-sm jse-tile-color1 waves-effect  blue-grey lighten-5' >
        <div class='jse-tile-body11'><div style='padding:3%;' align='center'><span style='font-size:36px; color:#000;'><i class='jicon jicon-dine-in'></i></span></div></div>
        <div  style='height:30px;' align='center'>
           <span class='jse-tile-txt-ord2'>ORDER `+(x+1)+`</span><br>
        </div>
     </div>
    </a>
</div>
`;



}




$('#tblordersmenucont').html(str);




  },
  error:function(err){
    console.log(err);
  }

});








}


function table_orders_app(x){
var customer_name="";
if(x!=null){

var tnid=$('#tbl_menu_tnid'+x).val();
var tablenum=$('#tbl_menu_num'+x).val();


localStorage.setItem("current_table_num",tablenum);
localStorage.setItem("current_tnid",tnid);
localStorage.setItem("current_customer","");
}
else{
var tablenum=localStorage.getItem("current_table_num");
var tnid=localStorage.getItem("current_tnid");

//var customer_name=(customer_name=="")?"":"Customer: "+localStorage.getItem("current_customer");


}










var str=`
`+progressbar()+`
 <!--Double navigation-->`+header()+`<!--/.Double navigation-->
<main>
<div class='orders-tbl_head row' style=''>
  <div class='text-white col-sm-6' id='order_tbl_name' align='center'>Table # `+tablenum+`</div>
  <div class='text-white col-sm-6' id='order_tbl_customer_name' align='center'>`+customer_name+`</div>
</div>


<div class='ord_setcont' id='ord_setcont1'>

<div><center><span class='jse-sm-head'>ORDERS</span></center></div>

<div class='container1 jse-container-1'>
  
  <div style='margin-top:1px;' >
    <div class='row' style='padding-top:2%;' id='tblordersmenucont'></div>
  </div>

</div>

</div>


</main>







<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
    <a href='#' class='js-bottom-txt' onclick='customer_form()'>
    <div align='center'><i class='fa fa-user'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Customer</div>
    </a>
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
    
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id='' style=''>

   <a href='#' class='js-bottom-txt' onclick='take_order()'>
    <div align='center'><i class='fa fa-arrow-left'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Back</div>
    </a>
    
  </div>

</div>


</div>
</div>


`;

$('body').html(str);


setTimeout(function(){ tool_init(); 

set_orders();
ord_setcont(1);
},1000);


}





function ord_setcont(n){
  $('.ord_setcont').hide();
  $('#ord_setcont'+n).show();
}







function dine_in_app(){
var tablenum=localStorage.getItem("current_table_num");
var tnid=localStorage.getItem("current_tnid");

var str=`
`+progressbar()+`
 <!--Double navigation-->
    `+header2()+`
    <!--/.Double navigation-->


<main>
<div class='container1 jse-container-1' style=''>
<div style='margin-top:43px;' >



<div class='row jse-border-bottom-line' id='poi_menu1'>
<div class='col-sm-4 col-md-4 col-lg-3'><a href='#' ><div class='jse-tab-panel initial'>Category</div></a></div>
<div class='col-sm-4 col-md-4 col-lg-5'><a href='#'><div class='jse-tab-panel'>Products/Items</div></a></div>
<div class='col-sm-4 col-md-4 col-lg-4'><a href='#'><div class='jse-tab-panel'>Orders</div></a></div>
</div>


<div class='row jse-border-bottom-line' id='poi_menu2'>
<div class='js-col-xs4 col-sm-4 col-md-4 col-lg-3'><a href='#' onclick='menusetcont(1)' ><div class='jse-tab-panel initial menusetcont_tab' id='menusetcont_tab1'>Category</div></a></div>
<div class='js-col-xs4 col-sm-4 col-md-4 col-lg-5'><a href='#' onclick='menusetcont(2)'><div class='jse-tab-panel menusetcont_tab' id='menusetcont_tab2'>Products/Items</div></a></div>
<div class='js-col-xs4 col-sm-4 col-md-4 col-lg-4'><a href='#' onclick='menusetcont(3)'><div class='jse-tab-panel menusetcont_tab' id='menusetcont_tab3'>Orders(<span id='menusetcont_tab3_counter'>0</span>)</div></a></div>
</div>




<div class='row'>
<div class='jse-divider-col1 menusetcont' id='menusetcont1'>`+dine_in_categoryoptions()+`</div>
<div  class='jse-divider-col2 menusetcont' id='menusetcont2'>`+dine_in_productoptions()+`</div>
<div  class='jse-divider-col3 menusetcont' id='menusetcont3'>`+din_in_order_payout()+`</div>
</div>


</div>
</div>
</main>






`+bottom_controls()+`



<!-- Modal -->
<div class="modal fade bottom" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-frame modal-bottom" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div style='height:300px;'></div>
      </div>
  
    </div>
  </div>
</div>






`;





if(localStorage.getItem("current_customer")==""){
toastr.error("Set Customer Name First");
}
else{
$('body').html(str);





setTimeout(function(){ tool_init(); 

    dine_in_category_item__options(); 
$('#bottom-nv3').hide();

},1000);

}


}




function bottom_controls(){
  var usertypeid=localStorage.getItem('user_userTypeId');
var str="";
if(usertypeid==7){ /* if usertype is waiter*/
str=`

<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-4 jcol-sm-4 bottom-nv' id='bottom-nv3' style=''>
    <a href='#' class='js-bottom-txt'>
    <div align='center'>
    <i class='fa fa-search'></i>
    </div>
    <div class='jse-tile-txt-item1' align='center'>Search</div>
    </a>
  </div>

  <div class='col-sm-4 jcol-sm-4 bottom-nv' id='bottom-nv1'>
    
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv1' id='bottom-nv12'>
     <a href='#' class='js-bottom-txt' onclick='table_orders_app()'>
    <div align='center'><i class='fa fa-arrow-left'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Back</div>
    </a>
    
  </div>
 

</div>


</div>
</div>


`;
}
else{
/*str=`
<div id='more_controls' data-toggle="modal" data-target="#basicExampleModal" class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'><b>More Controls</b></div>
</div>
`;*/


str=`

<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-4 jcol-sm-4 bottom-nv' id='bottom-nv3' style=''>
    <a href='#' class='js-bottom-txt'>
    <div align='center'>
    <i class='fa fa-search'></i>
    </div>
    <div class='jse-tile-txt-item1' align='center'>Search</div>
    </a>
  </div>

  <div class='col-sm-4 jcol-sm-4 bottom-nv' id='bottom-nv1'>
    
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv1' id='bottom-nv12'>
     <a href='#' class='js-bottom-txt' onclick='table_orders_app()'>
    <div align='center'><i class='fa fa-arrow-left'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Back</div>
    </a>
    
  </div>
 

</div>


</div>
</div>


`;


}

return str;
}



function menusetcont(n){
  $('.menusetcont').hide();
   $('#menusetcont'+n).show();
   $('.menusetcont_tab').attr("class","jse-tab-panel menusetcont_tab");
   $('#menusetcont_tab'+n).attr("class","jse-tab-panel initial menusetcont_tab");

if(n==1 || n==3){
$('#bottom-nv1').show();
$('#bottom-nv2').show();
$('#bottom-nv3').hide();
}
else if(n==2){
 $('#bottom-nv1').show();
$('#bottom-nv2').show();
$('#bottom-nv3').show(); 
}

}

































function app_body(){
var str=`
`+progressbar()+`


 <!--Double navigation-->
    `+header_sidebar()+`
    <!--/.Double navigation-->












<main>
<div class='container'>
<div style='margin-top:80px;' >



<div class="masonry-container">
   <div class="masonry-brick">Dine In</div>
   <div class="masonry-brick">Take Out</div>
   <div class="masonry-brick">Order Status</div>
   <div class="masonry-brick">Pay Out</div>
   <div class="masonry-brick">Admin</div>
  
</div>









</div>
</div>
</main>







<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

aaa
</div>
</div>
<!--

<div id='more_controls' data-toggle="modal" data-target="#basicExampleModal" class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'><b>More Controls</b></div>
</div>
-->



<!-- Modal -->
<div class="modal fade bottom" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-frame modal-bottom" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div style='height:300px;'></div>
      </div>
  
    </div>
  </div>
</div>






`;

$('body').html(str);

setTimeout(function(){ tool_init(); },1000);

}





function waiter_view_orders(){

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




<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
    
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id='' style=''>

   <a href='#' class='js-bottom-txt' onclick='take_order()'>
    <div align='center'><i class='fa fa-arrow-left'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Back</div>
    </a>
    
  </div>

</div>


</div>
</div>






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






function set_for_serving(){


var brid=localStorage.getItem("pos_initial_brid");  /*branchid*/
/*
$.ajax({
  url:base_url+"index.php/"
});
*/
}



























































function person_details(){
var accountid=localStorage.getItem("user_accountid");
$.ajax({
  url:base_url+"index.php/api/person_details",
  method:"POST",
  data:{accountid:accountid},
  success:function(data){ console.log(data);
    localStorage.setItem("person_data",data);
    var n=JSON.parse(data);
    $('#name_of_user').text(n.fname);
    $('#user_accountid').val(accountid);
    $('#user_pid').val(n.pid);
    localStorage.setItem('user_userTypeId',n.userTypeId);
    $('#profile_employeeid').text(n.employeeId);
    $('#profile_name').text(n.lname+" "+n.ename+", "+n.fname+" "+n.mname);


person_branch_details();


  },
  error:function(err){ console.log(err);
     var n=JSON.parse(localStorage.getItem("person_data"));
     $('#name_of_user').text(n.fname);
    
  }
});

}


function person_branch_details(){

var accountid=localStorage.getItem("user_accountid");
$.ajax({
    url:base_url+"index.php/api/branch_options_api",
    method:"POST",
    data:{accountid:accountid},
   success:function(data){ console.log(data);
    localStorage.setItem("branch_data",data);
    var n=JSON.parse(data);
    localStorage.setItem("pos_initial_brid",n[0].brid);
    tbl_locations_data();
    
  },
  error:function(err){ console.log(err);
    
    
  } 
});



}




function logout_process(){
SYS_confirm("Do you wish Proceed Logging out?","","warning","Yes","No",function(){
sweetAlertClose();  



$.ajax({
	url:base_url+"index.php/acctload/loadLogoutProcess",
	success:function(data){ console.log(data);
		var n=JSON.parse(data);
		if(n.res==true){ 



localforage.removeItem('session_accountid').then(function() {
    localStorage.removeItem("user_accountid");
    localStorage.removeItem("person_data");
        localStorage.removeItem('user_userTypeId');
        localStorage.removeItem('branch_data');
        localStorage.removeItem('pos_initial_brid');
    // Run this code once the key has been removed.
    console.log('Key is cleared!');
    toastr.success("Logout Granted");
  //   login_form();	
     window.location.href="./";
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
    toastr.error("Network Problem Detected");
});


}
	},
	error:function(err){
			toastr.error("Network Problem Detected");
			console.log(err);
	}
});




});


}







function Authenticate_inator(type,result){
var cashier_accountid=localStorage.getItem("user_accountid");


setNewModal('authenticate_inator');
$('#sidenav-overlay').click();
$('#authenticate_inator').modal('show');
$('#authenticate_inator_title').text("Authentication");

var str="";
str+=`
<div style='padding:3%;'>




<div class='row' style='margin-bottom:2%;'>
<div class='col-sm-12'>
<input type='password' class='form-control' id='form_auth_pin' placeholder='PIN' value='' />
<div>
</div>



<div class='row'>
<div class='col-sm-12' align='center'>
<button class='btn btn-success' id='authenticate_inator_login'>Authenticate</button>
</div>
</div>





</div>
`;

setTimeout(function(){

$('#form_auth_pin').focus();
},1000);


$('#authenticate_inator_body').html(str);



$('#form_auth_pin').keypress(function(e){  

if(e.keyCode=="13"){    






var auth_id=$('#form_auth_id').val();
var auth_pin=$('#form_auth_pin').val();



$.ajax({
  url:base_url+"index.php/api/authenticate_inator",
  method:"POST",
  data:{auth_id:auth_id,auth_pin:auth_pin,type:type,cashier_accountid:cashier_accountid},
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){
    $('#authenticate_inator').modal('hide');
    toastr.success("Access Granted");
    result(n.bool);

    }
    else{
      toastr.error(n.msg);
    result(false);  
    }
    

  },
  error:function(err){
    console.log(err);
    toastr.error("Access Denied");
    result(false);
  }
});



 }


});


$('#authenticate_inator_login').click(function(){

var auth_id=$('#form_auth_id').val();
var auth_pin=$('#form_auth_pin').val();



$.ajax({
  url:base_url+"index.php/api/authenticate_inator",
  method:"POST",
  data:{auth_id:auth_id,auth_pin:auth_pin,type:type,cashier_accountid:cashier_accountid},
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){
    $('#authenticate_inator').modal('hide');
    toastr.success("Access Granted");
    result(n.bool);

    }
    else{
      toastr.error(n.msg);
    result(false);  
    }
    

  },
  error:function(err){
    console.log(err);
    toastr.error("Access Denied");
    result(false);
  }
});




});



//$('#discountmodal1').modal('hide');

}



