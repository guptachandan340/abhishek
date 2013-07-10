(function($) {

    $.fn.crouselplugin = function( options ) {
	
	    function Book(bname,bimg,authname,content,rating,ratings,revivew,isbn,language,dopublication,publisher,schedule)
		{
         var bname = bname;
		 var bimg=bimg;
		 var authname=authname;
		 var content=content;
		 var rating=rating;
		 var ratings=ratings;
		 var revivew=revivew;
		 var isbn=isbn;
		 var language=language;
		 var dopublication=dopublication;
		 var publisher=publisher;
		 var schedule=schedule;
		 this.getbname=function(){
		 return bname;
		 }
		 this.getbimg=function(){
		 return  bimg;
		 }
		 this.getauthname=function(){
		 return authname;
		 }
		 this.getcontent=function(){
		 return content; 
		 }
		 this.getrating=function(){
		 return rating;
		 }
		 this.getratings=function(){
		 return ratings;
		 }
		 this.getrevivew=function(){
		 return revivew;
		 }
		 this.getisbn=function(){
		 return isbn;
		 }
		 this.getlanguage=function(){
		 return language;
		 }
		this.getdopublication= function(){
		 return dopublication;
		 }
		 this.getpublisher=function(){
		 return publisher;
		 }
		 this.getschedule = function(){
		 return schedule;
		 }
		}
		
		var initBookCarou1 = function (){                          
		var bookobj = new Array();
		bookobj[0] = new Book("The First Days","../assets/img/testimg4.jpg","by Rhiannon Frater","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","3.92/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","July 5th 2011","T.M.H",0);
		bookobj[1] = new Book("The Second Days","../assets/img/testimg3.jpg","by Rcherd jfher","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.92/5","8963","3400","0005331268 (ISBN13: 00005789585)","English","May 6th 2090","T.T.T",0);
		bookobj[2] = new Book("The Third Days","../assets/img/testimg2.jpg","by Sheferd ewddter","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","2.9/5","6747","5600","01115331268 (ISBN13: 111131267)","English","Jun 5th 1999","K.K.K",0);
		bookobj[3] = new Book("The Fourth Days","../assets/img/testimg.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","0387","3846","0225331268 (ISBN13: 777765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[4] = new Book("The Fifth Days","../assets/img/second-edition.gif","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[5] = new Book("The Sixth Days","../assets/img/testimg5.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[6] = new Book("The Seventh Days","../assets/img/testimg2.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[7] = new Book("The Eighth Days","../assets/img/testimg.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[8] = new Book("The Nineth Days","../assets/img/jdbc.gif","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[9] = new Book("The Tenth Days","../assets/img/first-edition.gif","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[10] = new Book("The Eleventh Days","../assets/img/testimg3.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
		bookobj[11] = new Book("The horror Days","../assets/img/continued.gif","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",0);
	   return bookobj;	
		}
		
		
		var displayBookCarou1 = function (bookarrayobj){
		var str1 = "";
		var str2 = "";
		var str3 = "";
		var str4 = "";
		var str5 = "";
		var str1start = "<div class='item active'><div class='row-fluid' id='ia'>";
		var str2end = "</div></div>";
		var str3start = "<div class='item'><div class='row-fluid' >";
		var arraylength = bookarrayobj.length;
		var k=0;
		for(var i=0;i<arraylength;i++){
		 if(i<4){
		 str1 += "<div class='span3'><a href='#img"+i+"' data-toggle='modal'><img src='"+bookarrayobj[i].getbimg()+"' style='height: 150px;width: 100px;' class='img-polaroid'></a><div id='img"+i+"' class='modal hide fade' tabindex='-1' role='dialog aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-body' style='min-height:500px;'><div class='thumbnail'><div class='row-fluid'><div class='span3'><br><img src='"+bookarrayobj[i].getbimg()+"' style='height: 220px;width: 160px;' class='img-polaroid'><br><br><div class='btn-group'><div class='btn-group'><button class='btn btn-info btn-small dropdown-toggle' data-toggle='dropdown'>Info <span class='caret'></span></button><ul class='dropdown-menu'><small><li><a href='#'>Read this book</a></li><li><a href='#'>Rate this book</a></li><li><a href='#'>Buy this book</a></li><li class='divider'></li><li><a href='#'>Search online</a></li></small></ul></div></div><span class='seostars'></span></div><div class='span1'></div><div class='span8'><h3>"+bookarrayobj[i].getbname()+"</h3><small class='muted' >"+bookarrayobj[i].getauthname()+"</small><br><small class='text-success'>Rating: "+bookarrayobj[i].getrating()+" &nbsp;&nbsp; "+bookarrayobj[i].getratings()+" Ratings &nbsp;&nbsp; "+bookarrayobj[i].getrevivew()+" Reviews</small><br><br><p>"+bookarrayobj[i].getcontent()+"</p><hr><small><dl class='dl-horizontal'><dt>ISBN</dt><dd>"+bookarrayobj[i].getisbn()+"</dd><dt>Edition language</dt><dd>"+bookarrayobj[i].getlanguage()+"</dd><dt>Date  of publication</dt><dd>"+bookarrayobj[i].getdopublication()+"</dd><dt>Publisher</dt><dd>"+bookarrayobj[i].getpublisher()+"</dd></dl></small><hr></div></div></div></div></div></div>";
		 if(i%3==0){
		 str5=str1start+str1+str2end;
		   }
		}
		 else{
		     k++;
		 str2 += "<div class='span3'><a href='#img"+i+"' data-toggle='modal'><img src='"+bookarrayobj[i].getbimg()+"' style='height: 150px;width: 100px;' class='img-polaroid'></a><div id='img"+i+"' class='modal hide fade' tabindex='-1' role='dialog aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-body' style='min-height:500px;' ><div class='thumbnail'><div class='row-fluid'><div class='span3'><br><img src='"+bookarrayobj[i].getbimg()+"' style='height: 220px;width: 160px;' class='img-polaroid'><br><br><div class='btn-group'><div class='btn-group'><button class='btn btn-info btn-small dropdown-toggle' data-toggle='dropdown'>Info <span class='caret'></span></button><ul class='dropdown-menu'><small><li><a href='#'>Read this book</a></li><li><a href='#'>Rate this book</a></li><li><a href='#'>Buy this book</a></li><li class='divider'></li><li><a href='#'>Search online</a></li></small></ul></div></div><span class='seostars'></span></div><div class='span1'></div><div class='span8'><h3>"+bookarrayobj[i].getbname()+"</h3><small class='muted' >"+bookarrayobj[i].getauthname()+"</small><br><small class='text-success'>Rating: "+bookarrayobj[i].getrating()+" &nbsp;&nbsp; "+bookarrayobj[i].getratings()+" Ratings &nbsp;&nbsp; "+bookarrayobj[i].getrevivew()+" Reviews</small><br><br><p>"+bookarrayobj[i].getcontent()+"</p><hr><small><dl class='dl-horizontal'><dt>ISBN</dt><dd>"+bookarrayobj[i].getisbn()+"</dd><dt>Edition language</dt><dd>"+bookarrayobj[i].getlanguage()+"</dd><dt>Date  of publication</dt><dd>"+bookarrayobj[i].getdopublication()+"</dd><dt>Publisher</dt><dd>"+bookarrayobj[i].getpublisher()+"</dd></dl></small><hr></div></div></div></div></div></div>";
		 if(k%4 == 0){
		 str3=str3+str3start+str2+str2end;
		 str2="";
		 }
		 }
		}
		return str5+str3;
		}
	   
         
        // Establish our default settings
        var settings = $.extend({
            text         : initBookCarou1(),
        }, options);

        return this.each( function() {
		
         $(this).append(displayBookCarou1(settings.text));

   
});

    }

}(jQuery));