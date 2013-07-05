 $(function($) {
 var user = $.parseJSON('{ "userid" : "2","username" : "srahul07","name" : \
		{ "firstName" : "Rahul","middleName" : "B","lastName" : "Shelke"},"gender" : "M" , "email" : "srahul07@gmail.com","address" : "Qpeka, Thane (West)" , "interests" : ["fiction" , "scifi" , "comedy" , "education" , "personal development"] , "userType" : "authenticated" , "userlevel" : {"reader" : "New","writter" : "Fresh" , "serviceprovider" : { "reviewer" : "New" , "editor" : "New" , "coverdesigner" : "New" , "proofreader" : "New" , "printers" : "New" ,"marketing" : "New" , "copyrightreg" : "New" , "publicrelation" : "New" } } ,"userpoints" : { "reader" : 576412, "writter" : 7482379, "serviceprovider" : { "reviewer" : 74832, "editor" : 673, "coverdesigner" : 67, "proofreader" : 75, "printers" : 6, "marketing" : 67, "copyrightreg" : 78549, "publicrelation" : 437322 }}}');
        $('.reading').attr({title : user.userlevel.writter});
		$(".knob").knob();
});
 
$(document).ready(function(){
$("#accordion > li > a").click(function(){
   if(false == $(this).next().is(':visible')) {
        $('#accordion ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
});

$("#crou .thumbnail").addClass("thumb");

 $("canvas").hover( function(e){ 
	    var hovertext = $('.reading').attr('title');
        $('#hoverdiv').text(hovertext).show().css('top' , e.clientY+15).css('right' , e.clientX+15);
       },
        function(){
	          $('#hoverdiv').hide(); 
		   });
		   
  });