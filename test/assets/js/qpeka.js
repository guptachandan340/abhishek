
 
$(document).ready(function(){
 var user = $.parseJSON('{ "userid" : "2","username" : "srahul07","name" : \
		{ "firstName" : "Rahul","middleName" : "B","lastName" : "Shelke"},"gender" : "M" , "email" : "srahul07@gmail.com","address" : "Qpeka, Thane (West)" , "interests" : ["fiction" , "scifi" , "comedy" , "education" , "personal development"] , "userType" : "authenticated" , "userlevel" : {"reader" : "New","writter" : "Fresh" , "serviceprovider" : { "reviewer" : "New" , "editor" : "New" , "coverdesigner" : "New" , "proofreader" : "New" , "printers" : "New" ,"marketing" : "New" , "copyrightreg" : "New" , "publicrelation" : "New" } } ,"userpoints" : { "reader" : 576412, "writter" : 7482379, "serviceprovider" : { "reviewer" : 74832, "editor" : 673, "coverdesigner" : 67, "proofreader" : 75, "printers" : 6, "marketing" : 67, "copyrightreg" : 78549, "publicrelation" : 437322 }}}');
        $('.reading').attr({title : user.userlevel.writter});
		$(".knob").knob();

$("#accordion > li > a").click(function(){
   if(false == $(this).next().is(':visible')) {
        $('#accordion ul').slideUp(300);
    }
    $(this).next().slideToggle(300);
});

$("#crou .thumbnail").addClass("thumb");

			$('.toolbar-icons a').on('click', function( event ) {
					event.preventDefault();
			     });
              $('.image img').toolbar({content: '#user-options', position: 'right'});
			  
      $('.filter').click(function(){
           var body$ = $(this).closest('.img_inline').find('.filter_body');
           if (body$.is(':hidden')) {
            body$.show();
			}
		else{
			body$.hide();
			}
			});
            
            
             var sampleTags = ['c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];

 $('#myULTags').tagit({
                availableTags: sampleTags, // this param is of course optional. it's for autocomplete.
                // configure the name of the input field (will be submitted with form), default: item[tags]
                itemName: 'item',
                fieldName: 'tags'
            });
          
           
            
            
        
            
          
        
           
		   
  });