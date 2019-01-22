
function header_cashier_sidebar(){
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
                        <li><a class="collapsible-header waves-effect arrow-r"><i class="fa fa-chevron-right"></i> Menu<i class="fa fa-angle-down rotate-icon"></i></a>
                            <div class="collapsible-body">
                                <ul class="list-unstyled">
                                    <li><a href="#" class="waves-effect" onclick='cashier_print_order_list()'>Print Order List</a></li>
                                    <li><a href="#" class="waves-effect" onclick='cashier_cash_payment()'>Cash payment</a></li>
                                    <li><a href="#" class="waves-effect" onclick='cashier_charge_payment()'>Charge payment</a></li>
                                    <li><a href="#" class="waves-effect" onclick='discount_mode()'>Discount</a></li>
                                    <li><a href="#" class="waves-effect" onclick=' cashier_order_edit_qty(); closeSidebar();'>Edit Order Qty.</a></li>

                                    <li><a href="#" class="waves-effect" onclick=' cashier_cancel_pio_order_items(); closeSidebar();'>Cancel Order/Item</a></li>
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













function payout_app(){

	var str=`
`+progressbar()+`
 <!--Double navigation-->`+header()+`<!--/.Double navigation-->
<main>
<div class='orders-tbl_head row' style=''>
  <div class='text-white col-sm-12'  align='center'>Payout</div>

</div>
<div class='container'>
  
  <div style='margin-top:0px;' >
    <div class='row' style='padding-top:5%; padding-bottom:25%;' id='tblmenucont_cashier'></div>
  </div>
</div>
</main>






<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-3 jcol-sm-3 bottom-nv11' id=''>
    <a href='#' class='js-bottom-txt' onclick='cashincashout()'>
    <div align='center'><i class='jicon-payout'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Cash In/Out</div>
   </a>
  </div>
    <div class='col-sm-3 jcol-sm-3 bottom-nv11' id=''>
    <a href='#' class='js-bottom-txt' onclick='set_table_locations2()'>
    <div align='center'><i class='fa fa-wrench'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Table Location</div>
    </a>






   </div>
  <div class='col-sm-3 jcol-sm-3 bottom-nv11' id=''>
    <a href='#' class='js-bottom-txt' onclick='daily_collection_report_print()'>
    <div align='center'><i class='fa fa-list'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Daily Collection Report</div>
   </a>
  </div>
  <div class='col-sm-3 jcol-sm-3 bottom-nv11' id='' style=''>

   <a href='#' class='js-bottom-txt' onclick='main_app()'>
    <div align='center'><i class='fa fa-arrow-left'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Back</div>
   </a>
    
  </div>

</div>


</div>
</div>





`;

$('body').html(str);

setTimeout(function(){ tool_init(); table_menu_items_cashier(); },1000);


}


function table_menu_items_cashier(){

var brid=localStorage.getItem("pos_initial_brid");
var tlid=localStorage.getItem('tbl_initial_tlid');

$.ajax({
    url:base_url+"index.php/api/tables_api",
     method:"POST",
     data:{brid:brid, tlid:tlid},
    success:function(data){
     // var nn=JSON.parse(data);
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
          <a href='#' onclick='table_payout_app(`+x+`)'>
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
        $('#tblmenucont_cashier').html(str);
    },
    error:function(err){
        console.log(err);
    }
});


}



function table_payout_app(x){
var tnid=$('#tbl_menu_tnid'+x).val();
var tablenum=$('#tbl_menu_num'+x).val();
localStorage.setItem("current_table_num",tablenum);
localStorage.setItem("current_tnid",tnid);

table_main_payout_app();

}


function table_main_payout_app(){
var tablenum=localStorage.getItem("current_table_num");
var str=`
`+progressbar()+`
 <!--Double navigation-->`+header_cashier_sidebar()+`<!--/.Double navigation-->
<main>
<div class='orders-tbl_head row' style=''>
  <div class='text-white col-sm-12' id='order_tbl_name' align='center'>Table # `+tablenum+`</div>

</div>

<div class='container'>
  
  <div style='margin-top:0px;' >
    <div class='row' style='padding-top:5%;' id='tblmenucont_main_cashier'>
    `+table_main_payput_app_content()+`
    </div>
  </div>
</div>
</main>




<div id='more_controls1' class='mask waves-effect waves-dark rgba-dark-slight' style='border-top:solid 2px rgba(0,0,0,0.1); padding:15px; background:#fff; position:fixed; bottom:0; left:0; width:100%;'>
<div class='container' align='center'>

<div class='row' align='center'>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
     <a href='#' class='js-bottom-txt' onclick='cashier_cash_payment()'>
    <div align='center'><i class='jicon-payout'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Cash payment</div>
   </a>
  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id=''>
    
<a href='#' class='js-bottom-txt' onclick='cashier_charge_payment()'>
    <div align='center'><i class='jicon-payout'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Charge payment</div>
   </a>



  </div>
  <div class='col-sm-4 jcol-sm-4 bottom-nv11' id='' style=''>

   <a href='#' class='js-bottom-txt' onclick='payout_app()'>
    <div align='center'><i class='fa fa-arrow-left'></i></div>
    <div class='jse-tile-txt-item1' align='center'>Back</div>
   </a>
    
  </div>

</div>


</div>
</div>


`;

$('body').html(str);

setTimeout(function(){ tool_init(); cashier_set_orders_ot_table(); },1000);

}



function table_main_payput_app_content(){

return `
<div class='col-sm-12'>
<div class='table-responsive'>
<input type='hidden' id='cashier_oid' value=''/>
<input type='hidden' id='cp_sid' value=''/>

<input type='hidden' id='cashier_customer_name' value=''/>
<span id='menusetcont_tab3_counter' style='display:none;'></span>
<table class='table table-bordered table-condensed' id='pi_orders_tbl'>
<thead>
<tr>
<th>#</th>
<th>Order/Item</th>
<th>Qty.</th>
<th>Price</th>
<th>Total</th>
</tr>
</thead>
  <tbody>
  </tbody>
<tfoot>
<tr>
<th   align='right'colspan='4'>TOTAL</th>
<td  align='right'><b><span id='pio_total_amount'>0.00</span></b></td>
</tr>
<tr>
<th align='right' colspan='4'>Discount</th>

<input type='hidden' id='pos_total_discid' value='' />
<input type='hidden' id='discounts_percentage' value='0' />
<input type='hidden' id='post_discount_type' value='' />
<input type='hidden' id='pio_discountpercent' value='0' />



<td align='right'><b><span id='pio_discount_amount'>0.00</span></b></td>
</tr>
<tr>
<th align='right' colspan='4'><b>AMOUNT DUE</b></th>
<td align='right'><b><span id='pio_amount_due'>0.00</span></b></td>
</tr>


<tr>
<th align='right' colspan='4'><b>BALANCE</b></th>
<td align='right'><b><span id='pio_payment_balance'>0.00</span></b></td>
</tr>


</tfoot>
</table>


<input type='hidden' id='pio_total_payment' value='0'/>

<input type='hidden' id='orders_tbl_cnt' value='0'/>



</div>
</div>
`;

}




function cashier_set_orders_ot_table(){
var brid=localStorage.getItem("pos_initial_brid");	
var tnid=localStorage.getItem("current_tnid");	

//get cuttent table's order
$.ajax({
url:base_url+"index.php/api/payout_orders_api",
method:"POST",
data:{ brid:brid, tnid:tnid },
success:function(data){ console.log(data);
var nn=data;


$('#cashier_customer_name').val(nn.customer_name);
$('#cashier_oid').val(nn.oid);
$('#cp_sid').val(nn.sid);

$('#pio_total_payment').val(nn.total_payments);


var n=nn.data;
var str="";
for(var x=0;x<n.length;x++){
var cnt=x;
var product_name=n[x].product_name;
var qty=n[x].qty;
var price=n[x].price;
var pid=n[x].pid;
var order_id=n[x].order_item_id;


var total_amount=parseFloat(price)*parseInt(qty);

str+=`


<tr id='tbl_pio_row`+cnt+`' onclick='pio_select(`+cnt+`)'>
<td class='waves-effect'>
<input type='hidden' id='tbl_pio_type`+cnt+`' value='product' />
<input type='hidden' id='tbl_pio_secected`+cnt+`' value='0' />
<input type='hidden' id='tbl_pio_visibility`+cnt+`' value='1' />
<input type='hidden' id='tbl_pio_pid`+cnt+`' value='`+pid+`' />
<input type='hidden' id='tbl_pio_productname`+cnt+`' value='`+product_name+`' />
<input type='hidden' id='tbl_pio_amount`+cnt+`' value='`+price+`' />
<input type='hidden' id='tbl_pio_qty`+cnt+`' value='`+qty+`' />
<input type='hidden' id='tbl_pio_order_id`+cnt+`' value='`+order_id+`' />
</td>
<td class='waves-effect'>`+product_name+`</td>
<td class='waves-effect'><span id='tbl_pio_disp_qty`+cnt+`'>`+qty+`</span></td>
<td class='waves-effect' align='right'><span >`+formatCurrency(price)+`</span></td>
<td class='waves-effect' align='right'><b><span id='tbl_pio_total`+cnt+`'>`+formatCurrency(total_amount)+`</span></b></td>
</tr>


`;
}


$('#pi_orders_tbl tbody').html(str);
$('#orders_tbl_cnt').val(n.length);
$('#menusetcont_tab3_counter').text(n.length)
setTimeout(function(){ pio_compute_order_total(); },500);

},
error:function(err){
	console.log(err);
	toastr.error("Newtwork Error");
}
});


}







function cashier_cash_payment(){

setNewModal('orderedit_quizmodal');
$('#orderedit_quizmodal').modal('show');
$('#orderedit_quizmodal_title').text("Cash payment");
  
var amount_due=($('#pio_amount_due').text()).replace(/[,]+/g,"");

var str=`
<div class='container' style='padding-bottom:3%;'>

<div class='row'>
<div class='col-sm-12'>

<table class='table table-bordered'>
<tr>
<td style='width:38%;'>Amount Due</td>
<td align='right'><span id='cashier_pay_amount_due'>`+formatCurrency(amount_due)+`</span></td>
</tr>
</table>

</div>
</div>


<div class='row' style='margin-bottom:1%;'>
<div class='col-sm-12'>
<label>Amount Tendered</label>
<input  style='background:#fff; text-align:right;' type='number' min="0.01" step="0.01" placeholder='0.00' class='form-control' id='cashier_pay_amount_tendered' onchange='cashier_compute_change()'>

</div>
</div>



<div class='row' style='margin-bottom:2%;'>
<div class='col-sm-12'>
<label>Change</label>
<input  style='background:#fff; text-align:right;' type='number' min="0.01" step="0.01"  class='form-control' id='cashier_pay_amount_change' value='0.00' disabled>
</div>
</div>


<div class='row'>
<div class='col-sm-12' align='right'>
<button class='btn btn-success' onclick='cashier_sales_save()'>Pay</button>
</div>
</div>


</div>
  `;

$('#orderedit_quizmodal_body').html(str);


closeSidebar();


}



function cashier_compute_change(){

var amount_due=($('#cashier_pay_amount_due').text()).replace(/[,]+/g,"");
var amount_tendered=$('#cashier_pay_amount_tendered').val();

var change=parseFloat(amount_tendered)-parseFloat(amount_due);
var change1=(formatCurrency(change)).replace(/[,]+/g,"")
$('#cashier_pay_amount_change').val(change1);



}









function cashier_order_edit_qty(){

setNewModal('orderedit_quizmodal');
$('#orderedit_quizmodal').modal('show');
$('#orderedit_quizmodal_title').text("Edit Quantity");
  

var orderlist=$('#menusetcont_tab3_counter').text();

if(orderlist==0){ toastr.warning("No Items to edit"); }
else{

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
var order_id=$('#tbl_pio_order_id'+x).val();

  items+=`
  <tr>
  <td>
  <input type='hidden' id='tbl_pio_ordertbl_rwnum`+z+`' value='`+x+`' />
  <input type='hidden' id='tbl_pio_edit_pid`+z+`' value='`+pid+`' />
  <input type='hidden' id='tbl_pio_edit_order_id`+z+`' value='`+order_id+`' />
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
<button class='btn btn-success' onclick='cashier_edit_qty_update_order_tbl()'>Done</button>
</div>
</div>

</div>
  `;

$('#orderedit_quizmodal_body').html(str);

}


}





function cashier_edit_qty_update_order_tbl(){
var brid=localStorage.getItem("pos_initial_brid");  
var tnid=localStorage.getItem("current_tnid");  




Authenticate_inator(5,function(result){
if(result){


var cnt=parseInt($('#tbl_editqty_cnt').val());
var z=0;
var qty1=[];
var order_id1=[];
var pid1=[];

  for(var x=0;x<cnt;x++){
    var row=$('#tbl_pio_ordertbl_rwnum'+x).val();
    var qty=$('#tbl_pio_edit_qty'+x).val();
    var order_id=$('#tbl_pio_edit_order_id'+x).val();
    var pid=$('#tbl_pio_edit_pid'+x).val();

    qty1[z]=qty;
    order_id1[z]=order_id;
    pid1[z]=pid;
    z+=1;

    $('#tbl_pio_disp_qty'+row).text(qty);
    $("#tbl_pio_qty"+row).val(qty);



  }










$.ajax({
  url:base_url+"index.php/api/cashier_edit_order_qty",
  method:"POST",
  data:{ brid:brid, tnid:tnid, pid1:pid1, order_id1:order_id1, qty1:qty1 },
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){

resetOrderTable();

   $('#orderedit_quizmodal').modal('hide');
   setTimeout(function(){ pio_compute_order_total(); },500);



    }
  },
  error:function(err){
    console.log(err);
    toastr.error("Network Error");
  }
});


}
});






}





function cashier_cancel_pio_order_items(){
var brid=localStorage.getItem("pos_initial_brid");  
var tnid=localStorage.getItem("current_tnid");  


SYS_confirm("Are you sure?","Cancelling Items","warning","Yes","No",function(){
sweetAlertClose();  



Authenticate_inator(5,function(result){
if(result){

var order_id=[]; var z=0;

var cnt=parseInt($('#orders_tbl_cnt').val());
for(var x=0;x<cnt;x++){
  if($('#tbl_pio_visibility'+x).val()==1){
    if($('#tbl_pio_secected'+x).val()==1){
      order_id[z]=$('#tbl_pio_order_id'+x).val();
      z+=1;

      $('#tbl_pio_row'+x).hide();
      $('#tbl_pio_visibility'+x).val(0);
      $('#tbl_pio_secected'+x).val(0);
    }
  }
}


$.ajax({
  url:base_url+"index.php/api/cashier_cancel_order_items",
  method:"POST",
  data:{ brid:brid, tnid:tnid, order_id:order_id },
  success:function(data){
    var n=JSON.parse(data);
    if(n.msg==""){
      setTimeout(function(){ pio_compute_order_total(); },500);
    }
  },
  error:function(err){
    console.log(err);
    toastr.success("Network Error");
  }
});

}
});







});



}






function discount_mode(){

$('#sidenav-overlay').click();

setNewModal('js-modal');
$('#js-modal').modal('show');
$('#js-modal_title').text("Discount");
  



var str="";
str+=`
<div style='padding-top:5%; padding-bottom:10%;'>
<div class='container'>
<div class='row'>
<div class='col-sm-6'>

<div class='row'>

<div class='col-sm-12' align='center'>
<button class='btn btn-primary btn-lg' style='width:100%;' data-dismiss="modal" onclick='discount_m_total(); '> Discount Total Amount</button>
</div>

</div>


</div>
<div class='col-sm-6'>

<div class='row'>

<div class='col-sm-12' align='center'>
<button class='btn btn-default btn-lg' style='width:100%;' data-dismiss="modal" onclick='discount_m__reset_total(); '> Reset( Discount Total Amount )</button>
</div>

</div>



</div>
</div>

</div>



<div>
`;

$('#js-modal_body').html(str);



}




function discount_m_total(){



Authenticate_inator(2,function(result){

if(result){


discounts_options();
localStorage.setItem("discount_mode",1);



}
});


}





function discount_m__reset_total(){

localStorage.setItem("discount_mode",1);  


SYS_confirm("Do you wish Proceed?","","warning","Yes","No",function(){
sweetAlertClose(); 

$('#pos_total_discid').val("");
//$('#discounts_percentage').text("0%");
$('#discounts_percentage').val(0);
$('#post_discount_type').val("");
localStorage.setItem("total_disc_decimal",0);

$('#pio_discount_amount').text(formatCurrency(0));

toastr.success("Discount resetting Successful");
setTimeout(function(){ pio_compute_order_total(); },1000);

});





}





function discounts_options(){

setNewModal('discountmodal1');
$('#sidenav-overlay').click();
$('#discountmodal1').modal('show');
$('#discountmodal1_title').text("Discounts Options");

var str="";
str+=`

<div class='dsetcont' id='dsetcont1'>

<button onclick='add_discount()' type="button" class="btn btn-primary btn-sm"><i class='fa fa-plus'></i></button>
<div class='table-responsive'>
<table class='table table-bordered' id='discountmodal_tbl'>
<thead>
<tr>
<th></th>
<th>Discount Name</th>
<th>Discount(%)</th>
<th>Select</th>
</tr>
</thead>
<tbody></tbody>
</table>
</div>

</div>

<div class='dsetcont' id='dsetcont2' style='display:none;' >


<input type='hidden' id='form_d_mode' value='add'/>
<input type='hidden' id='form_d_discid' value=''/>

<div class='row'>
<div class='col-sm-12'>
  <button type="button" class="btn btn-primary btn-sm" onclick='dsetcont(1);'><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
</div>
</div>
<hr>


<div style='padding:3%;'>

<div class='row' style='margin-bottom:2%;'>
<div class='col-sm-12'>
<label>Discount Name</label>
<input type='text'  id='form_d_discountname' class='form-control'  value='' placeholder='Discount Name'/>
<div>
</div>


<div class='row' style='margin-bottom:2%;'>
<div class='col-sm-12'>
<label>Discount(%)</label>
<div class="input-group mb-3">
<input type='text' id='form_d_discountpercentage' placeholder='Discount' class='form-control' aria-label="" aria-describedby="basic-addon1">
 <div class="input-group-append">
    <span class="input-group-text" id="basic-addon1"><b>%</b></span>
  </div>
</div>

<div>
</div>



<div class='row'>
<div class='col-sm-12' align='right'>
<button class='btn btn-success' onclick='save_discount()' >Save</button>
</div>
</div>






</div>
</div>
</div>

</div>
`;

$('#discountmodal1_body').html(str);
dsetcont(1);
setTimeout(function(){
discount_option_tbl();
},1000);



}

function discount_option_tbl(){
   localStorage.setItem('show_main_input',0);
var link=base_url+"index.php/api/loadDiscountssetlist?name=Xssd23SqQ";    
 SYS_TableServerside2(link,'#discountmodal_tbl');   
 
 setTimeout(function(){ $('select').material_select(); },500);

}




function dsetcont(n){
  $('.dsetcont').hide();
  $('#dsetcont'+n).show();
}



function add_discount(){
dsetcont(2);

}














function select_discount(x){

var n=JSON.parse($('#tbl_discnt_data'+x).val());
if(n){

var dmode=localStorage.getItem("discount_mode");
if(dmode==1){

$('#pos_total_discid').val(n.discid);

var discountpercentage=parseFloat(n.discountdecimal)*100;
$('#discounts_percentage').val(discountpercentage+"%");

$('#post_discount_type').val(n.disctype);


var total_sales=($('#pio_total_amount').text()).replace(/[,]+/g,"");
var total_discount=parseFloat(total_sales)*parseFloat(n.discountdecimal);
localStorage.setItem("total_disc_decimal",n.discountdecimal);


$('#pio_discount_amount').text(formatCurrency(total_discount));
setTimeout(function(){ pio_compute_order_total(); },1000);

}





}
$('#discountmodal1').modal('hide');
}


function save_discount(){

var mode=$('#form_d_mode').val();
var discid=$('#form_d_discid').val();
var discountname=$('#form_d_discountname').val();
var discount_percent=$('#form_d_discountpercentage').val();

$.ajax({
  url:base_url+"index.php/api/discounts_save",
  method:"POST",
  data:{
    mode:mode, 
    discid:discid, 
    discountname:discountname,
    discount_percent:discount_percent
  },
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){ toastr.success("Done Saving"); dsetcont(1);  discount_option_tbl();    }
    else{ toastr.error(n.msg); }
  
  },
  error:function(err){
    console.log(err);
    toastr.warning("Network Problem Detected");

  }
});

 

}













































function cashier_sales_save(){
var brid=localStorage.getItem("pos_initial_brid");
var tnid=localStorage.getItem("current_tnid");  
var cashier_accountid=localStorage.getItem("user_accountid");

var total_amount=($('#pio_total_amount').text()).replace(/[,]+/g,"");
var amount_due=($('#pio_amount_due').text()).replace(/[,]+/g,"");
var amount_paid=($('#cashier_pay_amount_tendered').val()).replace(/[,]+/g,"");
var change=($('#cashier_pay_amount_change').val()).replace(/[,]+/g,"");


var discount_amount=($('#pio_discount_amount').text()).replace(/[,]+/g,"");
var discid=$('#pos_total_discid').val();
var percent_value=$('#pio_discountpercent').val();
var discount_type=$('#post_discount_type').val();



var oid=$('#cashier_oid').val();
var customer_name=$('#cashier_customer_name').val();


var cnt=parseInt($('#orders_tbl_cnt').val());
var itemid=[]; var price=[]; var qty=[]; var total=[];
var order_id=[]; var type=[];
var z=0; 


for(var x=0;x<cnt;x++){
if($('#tbl_pio_visibility'+x).val()==1){

itemid[z]=$('#tbl_pio_pid'+x).val();
price[z]=$('#tbl_pio_amount'+x).val();
order_id[z]=$('#tbl_pio_order_id'+x).val();
qty[z]=$('#tbl_pio_qty'+x).val();
total[z]=$('#tbl_pio_total'+x).val();
type[z]=$('#tbl_pio_type'+x).val();
z+=1;

}


}


SYS_confirm("Are you sure?","","warning","Yes","No",function(){
sweetAlertClose(); 

$.ajax({
  url:base_url+"index.php/api/cashier_sales_save",
  method:"POST",
  data:{
    brid:brid,
    tnid:tnid,
    cashier_accountid:cashier_accountid,
    
    total_amount:total_amount,
    amount_due:amount_due,
    amount_paid:amount_paid,
    change:change,

    discount_amount:discount_amount,
    percent_value:percent_value,
    discount_type:discount_type,
    discid:discid,

    oid:oid,
    customer_name:customer_name,

    itemid:itemid,
    price:price,
    qty:qty,
    total:total,
    type:type,
    order_id:order_id

  },
  success:function(data){
    console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){

print_receipt(n.sid);


toastr.success("Information was saved");
$('#orderedit_quizmodal').modal('hide');

payout_app();


    }
    else{
      toastr.error(n.msg);
    }
  },
  error:function(err){
    console.log(err);
    toastr.error("Network Error");
  }
 });

});


}




function print_receipt(sid){

$('#sidenav-overlay').click();

setNewModal('print_r_modal');
$('#print_r_modal').modal('show');
$('#print_r_modal_title').text("Print Receipt");
  

var link=base_url+"index.php/api/sales_receipt_print?sid="+sid;

var str=`
<div ><iframe  src='`+link+`' style='height:400px; width:100%; border:none;'></iframe></div>
`;


$('#print_r_modal_body').html(str);

/*printJS(link);*/


}




function cashier_print_order_list(){

var brid=localStorage.getItem("pos_initial_brid");
var tnid=localStorage.getItem("current_tnid");  
var cashier_accountid=localStorage.getItem("user_accountid");

var total_amount=($('#pio_total_amount').text()).replace(/[,]+/g,"");
var amount_due=($('#pio_amount_due').text()).replace(/[,]+/g,"");


var discount_amount=($('#pio_discount_amount').text()).replace(/[,]+/g,"");
var discid=$('#pos_total_discid').val();
var percent_value=$('#pio_discountpercent').val();
var discount_type=$('#post_discount_type').val();


var oid=$('#cashier_oid').val();
var customer_name=$('#cashier_customer_name').val();



$('#sidenav-overlay').click();

setNewModal('print_r_modal');
$('#print_r_modal').modal('show');
$('#print_r_modal_title').text("Print Order List");
  

var link=base_url+"index.php/api/order_list_print?oid="+oid+"&brid="+brid+"&tnid="+tnid+"&cashier_accountid="+cashier_accountid+`
&total_amount=`+total_amount+`
&amount_due=`+amount_due+`
&discount_amount=`+discount_amount+``;

var str=`
<div ><iframe  src='`+link+`' style='height:400px; width:100%; border:none;'></iframe></div>
`;


$('#print_r_modal_body').html(str);




}




function cashier_charge_payment(){
setNewModal('orderedit_quizmodal');
$('#orderedit_quizmodal').modal('show');
$('#orderedit_quizmodal_title').text("Charge payment");
  
var balance=($('#pio_payment_balance').text()).replace(/[,]+/g,"");

var str=`
<div class='container' style='padding-bottom:3%;'>


<div class='row'>
<div class='col-sm-12'>

<table class='table table-bordered'>
<tr>
<td style='width:38%;'>Balance</td>
<td align='right'><span id='cashier_pay_balance'>`+formatCurrency(balance)+`</span></td>
</tr>
</table>

</div>
</div>


<div class='row' style='margin-bottom:1%;'>
<div class='col-sm-12'>
<label>Amount Paid</label>
<input  style='background:#fff; text-align:right;' type='number' min="0.01" step="0.01" placeholder='0.00' class='form-control' id='cashier_pay_amount_tendered' onchange='cashier_compute_change()'>

</div>
</div>




<div class='row'>
<div class='col-sm-12' align='right'>
<button class='btn btn-success' onclick='cashier_charge_sales_save()'>Pay</button>
</div>
</div>


</div>
  `;

$('#orderedit_quizmodal_body').html(str);


closeSidebar();


}




function cashier_charge_sales_save(){
var brid=localStorage.getItem("pos_initial_brid");
var tnid=localStorage.getItem("current_tnid");  
var cashier_accountid=localStorage.getItem("user_accountid");

var total_amount=($('#pio_total_amount').text()).replace(/[,]+/g,"");
var amount_due=($('#pio_amount_due').text()).replace(/[,]+/g,"");

var balance=($('#pio_payment_balance').text()).replace(/[,]+/g,"");
var amount_paid=$('#cashier_pay_amount_tendered').val();



var discount_amount=($('#pio_discount_amount').text()).replace(/[,]+/g,"");
var discid=$('#pos_total_discid').val();
var percent_value=$('#pio_discountpercent').val();
var discount_type=$('#post_discount_type').val();



var oid=$('#cashier_oid').val();
var sid=$('#cp_sid').val();

var customer_name=$('#cashier_customer_name').val();


var cnt=parseInt($('#orders_tbl_cnt').val());
var itemid=[]; var price=[]; var qty=[]; var total=[];
var order_id=[]; var type=[];
var z=0; 


for(var x=0;x<cnt;x++){
if($('#tbl_pio_visibility'+x).val()==1){

itemid[z]=$('#tbl_pio_pid'+x).val();
price[z]=$('#tbl_pio_amount'+x).val();
order_id[z]=$('#tbl_pio_order_id'+x).val();
qty[z]=$('#tbl_pio_qty'+x).val();
total[z]=$('#tbl_pio_total'+x).val();
type[z]=$('#tbl_pio_type'+x).val();
z+=1;

}


}




SYS_confirm("Are you sure?","","warning","Yes","No",function(){
sweetAlertClose(); 

$.ajax({
  url:base_url+"index.php/api/cashier_charge_sales_save",
  method:"POST",
  data:{
    brid:brid,
    tnid:tnid,
    cashier_accountid:cashier_accountid,
    
    total_amount:total_amount,
    amount_due:amount_due,
    amount_paid:amount_paid,
  balance:balance,

    discount_amount:discount_amount,
    percent_value:percent_value,
    discount_type:discount_type,
    discid:discid,

    oid:oid,
    sid:sid,
    customer_name:customer_name,

    itemid:itemid,
    price:price,
    qty:qty,
    total:total,
    type:type,
    order_id:order_id

  },
  success:function(data){
    console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){

//print_receipt(n.sid);


toastr.success("Information was saved");
$('#orderedit_quizmodal').modal('hide');

if(n.fullpaid){
payout_app();
}


cashier_set_orders_ot_table();
    }
    else{
      toastr.error(n.msg);
    }
  },
  error:function(err){
    console.log(err);
    toastr.error("Network Error");
  }
 });

});





}






function cashincashout(){
$('#sidenav-overlay').click();
setNewModal('js-modal');
$('#js-modal').modal('show');
$('#js-modal_title').text("Cash In/ Cash Out");
  


var str="";
str+=`


<div class="classic-tabs tabs-blue" >

  <ul class="nav tabs-blue" role="tablist">
    <li class="nav-item">
      <a class="nav-link waves-light active  text-white" style='text-align:left' data-toggle="tab" href="#panel1001" role="tab" onclick='setCashins();'>Cash In</a>
    </li>
    
<li class="nav-item">
      <a class="nav-link waves-light  text-white" style='text-align:left' data-toggle="tab" href="#panel1002" role="tab" onclick='setCashouts()'>Cash Out</a>
    </li>
    
  </ul>



</div>


 <div class="tab-content border-right border-bottom border-left rounded-bottom">

   
    <!--/.Panel 2-->
     <div class="tab-pane fade in show active" id="panel1001" role="tabpanel">
   




<div style='height:400px; overflow:auto;'>

  <table id="t_maintable" class="table table-bordered table-striped table-condensed table-hover">
    <thead>
    <tr class="addbtn">
    <th class="cash"></th>
    <th class="qty" width="30%">Qty.</th>
    <th>Total</th>
    </tr>
    </thead>
    <tbody>
        <tr><td>P 1000.00</td><td><input width="100%"  type="number" id="pX1000" value="" placeholder="0" onchange='caco_compute_total(1000)' class="fulls toright"  ></td><td id="tX1000">0.00</td></tr>
        <tr><td>P 500.00</td><td><input width="100%" type="number" id="pX500" value="" placeholder="0" onchange='caco_compute_total(500)' class="fulls toright" ></td><td id="tX500">0.00</td></tr>
        <tr><td>P 200.00</td><td><input width="100%" type="number" id="pX200" value="" placeholder="0" onchange='caco_compute_total(200)' class="fulls toright" ></td><td id="tX200">0.00</td></tr>
        <tr><td>P 100.00</td><td><input width="100%" type="number" id="pX100" value="" placeholder="0" onchange='caco_compute_total(100)' class="fulls toright" ></td><td id="tX100">0.00</td></tr>
        <tr><td>P 50.00</td><td><input width="100%" type="number" id="pX50" value="" placeholder="0" onchange='caco_compute_total(50)' class="fulls toright" ></td><td id="tX50">0.00</td></tr>
        <tr><td>P 20.00</td><td><input width="100%" type="number" id="pX20" value="" placeholder="0" onchange='caco_compute_total(20)' class="fulls toright" ></td><td id="tX20">0.00</td></tr>
        <tr><td>P 10.00</td><td><input width="100%" type="number" id="pX10" value="" placeholder="0" onchange='caco_compute_total(10)' class="fulls toright" ></td><td id="tX10">0.00</td></tr>
        <tr><td>P 5.00</td><td><input width="100%" type="number" id="pX5" value="" placeholder="0" onchange='caco_compute_total(5)' class="fulls toright" ></td><td id="tX5">0.00</td></tr>
        <tr><td>P 1.00</td><td><input width="100%" type="number" id="pX1" value="" placeholder="0" onchange='caco_compute_total(1)' class="fulls toright" ></td><td id="tX1">0.00</td></tr>
        <tr><td>P 0.25</td><td><input width="100%" type="number" id="pX025" value="" placeholder="0" onchange='caco_compute_total("025")' class="fulls toright" ></td><td id="tX025">0.00</td></tr>
        <tr><td>P 0.10</td><td><input width="100%" type="number" id="pX010" value="" placeholder="0" onchange='caco_compute_total("010")' class="fulls toright" ></td><td id="tX010">0.00</td></tr>
        <tr><td>P 0.05</td><td><input width="100%" type="number" id="pX005" value="" placeholder="0" onchange='caco_compute_total("005")' class="fulls toright" ></td><td id="tX005">0.00</td></tr>
    </tbody>
    </table>
</div>
<div class='row'>
<div class='col-sm-6'>
<b>Total: <span id='cashintotal'>0.00</span></b>
</div>


<div class='col-sm-6' align='right'>
<button onclick='cashin_save()' class='btn btn-success'>Cash In</button>
</di>







</div>
</div>





    </div>
    <!--/.Panel 1-->


    <!--Panel 2-->
    <div class="tab-pane fade" id="panel1002" role="tabpanel">
     





<div style='height:400px; overflow:auto;'>

  <table id="t_maintable" class="table table-bordered table-striped table-condensed table-hover">
    <thead>
    <tr class="addbtn">
    <th class="cash"></th>
    <th class="qty" width="30%">Qty.</th>
    <th>Total</th>
    </tr>
    </thead>
    <tbody>
        <tr><td>P 1000.00</td><td><input width="100%"  type="number" id="apX1000" value="" placeholder="0" onchange='acaco_compute_total(1000)' class="fulls toright"></td><td id="atX1000">0.00</td></tr>
        <tr><td>P 500.00</td><td><input width="100%" type="number" id="apX500" value="" placeholder="0" onchange='acaco_compute_total(500)' class="fulls toright"></td><td id="atX500">0.00</td></tr>
        <tr><td>P 200.00</td><td><input width="100%" type="number" id="apX200" value="" placeholder="0" onchange='acaco_compute_total(200)' class="fulls toright"></td><td id="atX200">0.00</td></tr>
        <tr><td>P 100.00</td><td><input width="100%" type="number" id="apX100" value="" placeholder="0" onchange='acaco_compute_total(100)' class="fulls toright"></td><td id="atX100">0.00</td></tr>
        <tr><td>P 50.00</td><td><input width="100%" type="number" id="apX50" value="" placeholder="0" onchange='acaco_compute_total(50)' class="fulls toright"></td><td id="atX50">0.00</td></tr>
        <tr><td>P 20.00</td><td><input width="100%" type="number" id="apX20" value="" placeholder="0" onchange='acaco_compute_total(20)' class="fulls toright"></td><td id="atX20">0.00</td></tr>
        <tr><td>P 10.00</td><td><input width="100%" type="number" id="apX10" value="" placeholder="0" onchange='acaco_compute_total(10)' class="fulls toright"></td><td id="atX10">0.00</td></tr>
        <tr><td>P 5.00</td><td><input width="100%" type="number" id="apX5" value="" placeholder="0" onchange='acaco_compute_total(5)' class="fulls toright"></td><td id="atX5">0.00</td></tr>
        <tr><td>P 1.00</td><td><input width="100%" type="number" id="apX1" value="" placeholder="0" onchange='acaco_compute_total(1)' class="fulls toright"></td><td id="atX1">0.00</td></tr>
        <tr><td>P 0.25</td><td><input width="100%" type="number" id="apX025" value="" placeholder="0" onchange='acaco_compute_total("025")' class="fulls toright"></td><td id="atX025">0.00</td></tr>
        <tr><td>P 0.10</td><td><input width="100%" type="number" id="apX010" value="" placeholder="0" onchange='acaco_compute_total("010")' class="fulls toright"></td><td id="atX010">0.00</td></tr>
        <tr><td>P 0.05</td><td><input width="100%" type="number" id="apX005" value="" placeholder="0" onchange='acaco_compute_total("005")' class="fulls toright"></td><td id="atX005">0.00</td></tr>
    </tbody>
    </table>
</div>
<div class='row'>
<div class='col-sm-6'>
<b>Total: <span id='acashintotal'>0.00</span></b>
</div>


<div class='col-sm-6' align='right'>
<button onclick='cashout_save()' class='btn btn-success'>Cash Out</button>
</di>







</div>
</div>







    </div>
    
  </div>`;

$('#js-modal_body').html(str);



setCashouts();
setCashins();
//swal("Reminder before proceeding","Please print daily collection report before you cash out.","info");
}








function sum_all_cashin(){
  var amnts_id=["1000","500","200","100","50","20","10","5","1","025","010","005"];
  var amnts=["1000","500","200","100","50","20","10","5","1","0.25","0.10","0.05"];
  var total=0;
  for(var x=0;x<amnts.length;x++){
    var amount=($('#tX'+amnts_id[x]).text()).replace(/[,]+/g,"");
    total+=parseFloat(amount);
  }
  $('#cashintotal').text(formatCurrency(total));
}




function asum_all_cashin(){
  var amnts_id=["1000","500","200","100","50","20","10","5","1","025","010","005"];
  var amnts=["1000","500","200","100","50","20","10","5","1","0.25","0.10","0.05"];
  var total=0;
  for(var x=0;x<amnts.length;x++){
    var amount=($('#atX'+amnts_id[x]).text()).replace(/[,]+/g,"");
    total+=parseFloat(amount);
  }
  $('#acashintotal').text(formatCurrency(total));
}







function caco_compute_total(amount){
var amnt=0;
if(amount=="025"){ amnt="0.25"; }
else if(amount=="10"){ amnt="10"; }
else if(amount=="5"){ amnt="5"; }

else if(amount=="010"){ amnt="0.10"; }
else if(amount=="005"){ amnt="0.05"; }
else{
  amnt=amount;
}
var qty=($('#pX'+amount).val()).replace(/[,]+/g,"");
var total=parseFloat(amnt)*parseInt(qty);
$("#tX"+amount).text(formatCurrency(total));


sum_all_cashin();
}





function acaco_compute_total(amount){
var amnt=0;
if(amount=="025"){ amnt="0.25"; }
else if(amount=="10"){ amnt="10"; }
else if(amount=="5"){ amnt="5"; }
else if(amount=="010"){ amnt="0.10"; }
else if(amount=="005"){ amnt="0.05"; }
else{
  amnt=amount;
}
var qty=$('#apX'+amount).val();
var total=parseFloat(amnt)*parseInt(qty);
$("#atX"+amount).text(formatCurrency(total));


asum_all_cashin();
}








function cashin_save(){
var amnts_id=["1000","500","200","100","50","20","10","5","1","025","010","005"];
var amnts=["1000","500","200","100","50","20","10","5","1","0.25","0.10","0.5"];


var user_accountid=localStorage.getItem("user_accountid");
var qty=[]; amount_type=[]; amount=[]; 
var total=0;
for(var x=0;x<amnts.length;x++){
  amount[x]=($('#tX'+amnts_id[x]).text()).replace(/[,]+/g,"");
  amount_type[x]=amnts_id[x];
  qty[x]=$('#pX'+amnts_id[x]).val();
}



$.ajax({
  url:base_url+"index.php/api/cashin_save",
  method:"POST",
  data:{ amount:amount, amount_type:amount_type, qty:qty, user_accountid:user_accountid},
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){
      toastr.success("Cash In -  Saved");
$('#js-modal_body').modal('hide');

    }
  },
  error:function(err){
    console.log(err);
  }
});



}




function cashout_save(){
var amnts_id=["1000","500","200","100","50","20","10","5","1","025","010","005"];
var amnts=["1000","500","200","100","50","20","10","5","1","0.25","0.10","0.5"];
var qty=[]; amount_type=[]; amount=[]; 
var total=0;

var user_accountid=localStorage.getItem("user_accountid");
for(var x=0;x<amnts.length;x++){
  amount[x]=($('#atX'+amnts_id[x]).text()).replace(/[,]+/g,"");
  amount_type[x]=amnts_id[x];
  qty[x]=$('#apX'+amnts_id[x]).val();
}



$.ajax({
  url:base_url+"index.php/api/cashout_save",
  method:"POST",
  data:{ amount:amount, amount_type:amount_type, qty:qty, user_accountid:user_accountid},
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    if(n.msg==""){
      toastr.success("Cash Out -  Saved");
$('#js-modal_body').modal('hide');

    }
  },
  error:function(err){
    console.log(err);
  }
});


}




function setCashouts(){

var user_accountid=localStorage.getItem("user_accountid");

$.ajax({
  url:base_url+"index.php/api/cashout_data",
  method:"POST",
  data:{ user_accountid:user_accountid }, 
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    for(var x=0;x<n.length;x++){

      var qty=n[x].qty;
      var amount=n[x].amount;

      var amnt=0;
      if(amount=="025"){ amnt="0.25"; }
      else if(amount=="10"){ amnt="10"; }
      else if(amount=="5"){ amnt="5"; }
      else if(amount=="010"){ amnt="0.10"; }
      else if(amount=="005"){ amnt="0.05"; }
      else{ amnt=amount; }

      var total=parseFloat(amnt)*parseInt(qty);

      $('#apX'+amount).val(qty);
      $('#atX'+amount).text(formatCurrency(total));


      asum_all_cashin();




    }
  },
  error:function(err){
    console.log(err);
  }
});


}




function setCashins(){

var user_accountid=localStorage.getItem("user_accountid");

$.ajax({
  url:base_url+"index.php/api/cashins_data",
  method:"POST",
  data:{ user_accountid:user_accountid }, 
  success:function(data){ console.log(data);
    var n=JSON.parse(data);
    for(var x=0;x<n.length;x++){

      var qty=n[x].qty;
      var amount=n[x].amount;

      var amnt=0;
      if(amount=="025"){ amnt="0.25"; }
      else if(amount=="10"){ amnt="10"; }
      else if(amount=="5"){ amnt="5"; }
      else if(amount=="010"){ amnt="0.10"; }
      else if(amount=="005"){ amnt="0.05"; }
      else{ amnt=amount; }

      var total=parseFloat(amnt)*parseInt(qty);


      $('#pX'+amount).val(qty);
      $('#tX'+amount).text(formatCurrency(total));

      sum_all_cashin();


    }
  },
  error:function(err){
    console.log(err);
  }
});


}




function daily_collection_report_print(){
$('#sidenav-overlay').click();

setNewModal('js-modal');
$('#js-modal').modal('show');
$('#js-modal-title').text("Daily Collection Report");




var brid=localStorage.getItem("pos_initial_brid");
var user_accountid=localStorage.getItem("user_accountid");
var branchname="";

var link=base_url+"index.php/api/daily_collection_report?";
link+="brid="+brid;
link+="&branchname="+branchname;
link+="&user_accountid="+user_accountid;

$('#js-modal_body').html("<iframe  src='"+link+"' style='height:400px; width:100%; border:none;'></iframe>");
}





function set_table_locations2(){




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
<td align='center'><a href='#' onclick='change_tbl_location2(`+x+`)' style='width:100%;'><i class='fa fa-arrow-right'></i></a></td>
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



function change_tbl_location2(x){
  var tlid=$('#tbl_tl_tlid'+x).val();
  localStorage.setItem("tbl_initial_tlid",tlid);
  table_menu_items_cashier();
  $('#orderedit_quizmodal').modal('hide');
}
