var base_url="http://localhost/OJ_project/admin/";

$(document).ajaxStart(function () {  
  $('#loader').show();
  $('#loaderbar').animate({'width':'100%'}); }).ajaxStop(function () { $('#loader').hide();  });



$(document).ready(function(){
	
$(".collapsible-body a").css({'background':'#fff'});








});




formatCurrency=function(num) { /*Converts a number to money format*/
num = (num)?num.toString().replace(/\$|\,/g,''):0;
if(isNaN(num))
num = "0";
sign = (num == (num = Math.abs(num)));
num = Math.floor(num*100+0.50000000001);
cents = num%100;
num = Math.floor(num/100).toString();
if(cents<10)
cents = "0" + cents;
for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
num = num.substring(0,num.length-(4*i+3))+','+
num.substring(num.length-(4*i+3));
return (((sign)?'':'-') + num + '.' + cents);
}



/*** SWEET ALERT CUSTOMIZED FUNCTIONS ****/

sweetAlertClose=function(){
$('.sweet-overlay,.sweet-alert').hide();
 $('body.stop-scrolling').css({'overflow':'auto'});	
}


SYS_confirm=function(title,text,type,savename,cancelname,successfunc){
swal({
  title: title,
  text: text,
  type: type,
  showCancelButton: true,
  confirmButtonColor: "#68BEFD",
  confirmButtonText: savename,
  cancelButtonText: cancelname,
  closeOnConfirm: false
},
function(){
successfunc();
});
}


SYS_confirm2=function(title,text,type,savename,cancelname,successfunc,cancelfunct){
swal({
  title: title,
  text: text,
  type: type,
  showCancelButton: true,
  confirmButtonColor: "#68BEFD",
  confirmButtonText: savename,
  cancelButtonText: cancelname,
  closeOnConfirm: false,
  closeOnCancel:false
},
function(isConfirm){
  if(isConfirm){ successfunc(); }
  else{ cancelfunct(); }

});
}




/* DATATABLE CUSTOMIZED FUNCTIONS*/
SYS_TableStart=function(tablename){
$(tablename).hide();  
$(tablename).DataTable().destroy(); 	
}

SYS_TablefirstInstance=function(tablename){
$(tablename).fadeIn();  
$(tablename).DataTable({
   searching:true,
   ordering:true,
   select:false,
   aLengthMenu: [[10,25, 50, 75, -1], [10,25, 50, 75, "All"]],
   pageLength: 10,
    });
   $(tablename).css({'font-size':'12px','width':'100%'}); 
}

SYS_TablefirstInstance1=function(tablename,strt,paglength){
$(tablename).fadeIn();  
$(tablename).DataTable({
   searching:true,
   ordering:true,
   select:false,
   aLengthMenu: [[strt,10,25, 50, 75, -1], [strt,10,25, 50, 75, "All"]],
   pageLength: paglength,
    });
   $(tablename).css({'font-size':'12px','width':'100%'}); 
}







function SYS_TableServerside2(url,tbl){
SYS_TableStart(tbl);  
$(tbl).fadeIn(); 
   $(tbl).DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": url,
            "dataType": "json",
            "error": function(jqXHR, textStatus, errorThrown){
        $(tbl+' tbody').html("<tr><td colspan='10'>No Results Found</td></tr>");
        $(tbl+' .dataTables_info').text("Showing 0 to 0 of 0 entries");
           }
        },
         "aLengthMenu": [[5,10,25, 50, 100], [5,10,25, 50, 100]],
         "pageLength": 5,
        "columnDefs":[{
            "target":[0,5],
            "orderable":false
        }]

    });
$(tbl).css({'visibility':'visible'});

  $(tbl+'_wrapper').find('label').each(function () {
    $(this).parent().append($(this).children());
  });
  $(tbl+'_wrapper .dataTables_filter').find('input').each(function () {
    $(tbl+'_filter input').attr("placeholder", "Search");
    $('input').removeClass('form-control-sm');
  });
  $(tbl+'_wrapper .dataTables_length').addClass('d-flex flex-row');
  $(tbl+'_wrapper .dataTables_filter').addClass('md-form');
  $(tbl+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
  $(tbl+'_wrapper select').addClass('mdb-select');
  $(tbl+'_wrapper .mdb-select').material_select();
  $(tbl+'_wrapper .dataTables_filter').find('label').remove();



}




function setDatatable(tblidname){

$('#'+tblidname).DataTable({
aLengthMenu: [[5,10,25, 50, 100], [5,10,25, 50, 100]],
pageLength: 5
  });


  $('#'+tblidname+'_wrapper').find('label').each(function () {
    $(this).parent().append($(this).children());
  });
  $('#'+tblidname+'_wrapper .dataTables_filter').find('input').each(function () {
    $('input').attr("placeholder", "Search");
    $('input').removeClass('form-control-sm');
  });
  $('#'+tblidname+'_wrapper .dataTables_length').addClass('d-flex flex-row');
  $('#'+tblidname+'_wrapper .dataTables_filter').addClass('md-form');
  $('#'+tblidname+'_wrapper select').removeClass('custom-select custom-select-sm form-control form-control-sm');
  $('#'+tblidname+'_wrapper select').addClass('mdb-select');
  $('#'+tblidname+'_wrapper .mdb-select').material_select();
  $('#'+tblidname+'_wrapper .dataTables_filter').find('label').remove();

}







function setNewModal(idname){

$('#'+idname).remove();

var str="";
str+=`
<div class="modal fade top" id="`+idname+`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-top " role="document">
    <div class="modal-content">
      <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"><span id='`+idname+`_title'></span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               <div id='`+idname+`_body'></div>
            </div>
        </div>
    </div>
</div>
`;

$('body').append(str);
$("#"+idname).on("hidden.bs.modal", function () {
    localStorage.setItem('show_main_input',1);
});

}





function setcont(n){

setTimeout(function(){


  $('.setcont').hide();
  $('#setcont'+n).show();


  if(n!=1){ $('#more_controls').hide(); }
  else{
    $('#more_controls').show();
  }
},300);
}





function person_details(){
var accountid=localStorage.getItem("user_accountid");
$.ajax({
  url:URL+"index.php/api/person_details",
  method:"POST",
  data:{accountid:accountid},
  success:function(data){ console.log(data);
    localStorage.setItem("person_data",data);
    var n=JSON.parse(data);
    $('#name_of_user').text(n.fname);
    $('#user_accountid').val(accountid);
    $('#user_pid').val(n.pid);

    $('#profile_employeeid').text(n.employeeId);
    $('#profile_name').text(n.lname+" "+n.ename+", "+n.fname+" "+n.mname);
getSYOptions();
  },
  error:function(err){ console.log(err);
     var n=JSON.parse(localStorage.getItem("person_data"));
     $('#name_of_user').text(n.fname);
     getSYOptions();
  }
});

}

function tool_init2(){
  var n=JSON.parse(localStorage.getItem("person_data"));
     $('#name_of_user').text(n.fname);


}

  function tool_init(){
tool_init2();
   $(".button-collapse").sideNav();
          $('.mdb-select').material_select();
  	 new WOW().init();
     $(".collapsible-body a").css({'background':'#fff'});


	/*person_details();*/

 $('.collapsible-body').show(); 

}



function closeSidebar(){
  $('#sidenav-overlay').click();
}