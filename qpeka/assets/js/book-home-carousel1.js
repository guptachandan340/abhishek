//common Book() class for myCarousel-1,myCarousel-2

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
		
// for myCarousel book info

        var initBookCarou2 = function (){
	    var bookobj = new Array();
	    bookobj[0] = new Book("The Nineth Days","../assets/img/testimg4.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C",""); 
		bookobj[1] = new Book("The Tenth Days","../assets/img/testimg2.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C","");
		bookobj[2] = new Book("The Eleventh Days","../assets/img/testimg.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C","");
		bookobj[3] = new Book("The horror Days","../assets/img/testimg1.jpg","by Disoza Frathd","Katie is driving to work one beautiful day when a dead man jumps into her car and tries to eat her. That same morning, Jenni opens a bedroom door to find her husband devouring their toddler son. Fate puts Jenni and Katie—total strangers—together in a pickup, fleeing the suddenly zombie-filled streets of the Texas city in which they live. Before the sun has set, they have be...more","4.44/5","3200","3200","0765331268 (ISBN13: 9780765331267)","English","April 5th 2012","C.C.C","");
	   return bookobj;
	  }
	 
	 var displayBookCarou2 = function (bookarrayobj){
	 var arraylength = bookarrayobj.length;
		var active = "";
		var noactive = "";
		for(var i=0;i<arraylength;i++){
		if(i==0){
		active="<div class='item active'><div class='row-fluid'><div class='row-fluid'><div class='span4' ><a href='#imgCarou2"+i+"' data-toggle='modal'><img src='"+bookarrayobj[i].getbimg()+"'  style='height: 150px;width: 160px;' class'img-polaroid'></a><br><br><br><div id='imgCarou2"+i+"' class='modal hide fade' tabindex='-1' role='dialog aria-labelledby='myModalLabel' aria-hidden='true' ><div class='modal-body' style='min-height:500px;'><div class='thumbnail'><div class='row-fluid'><div class='span3'><br><img src='"+bookarrayobj[i].getbimg()+"' style='height: 220px;width: 160px;' class='img-polaroid'><br><br><div class='btn-group'><div class='btn-group'><button class='btn btn-info btn-small dropdown-toggle' data-toggle='dropdown'>Info <span class='caret'></span></button><ul class='dropdown-menu'><small><li><a href='#'>Read this book</a></li><li><a href='#'>Rate this book</a></li><li><a href='#'>Buy this book</a></li><li class='divider'></li><li><a href='#'>Search online</a></li></small></ul></div></div><span class='seostars'></span></div><div class='span1'></div><div class='span8'><h3>"+bookarrayobj[i].getbname()+"</h3><small class='muted' >"+bookarrayobj[i].getauthname()+"</small><br><small class='text-success'>Rating: "+bookarrayobj[i].getrating()+" &nbsp;&nbsp; "+bookarrayobj[i].getratings()+" Ratings &nbsp;&nbsp; "+bookarrayobj[i].getrevivew()+" Reviews</small><br><br><p>"+bookarrayobj[i].getcontent()+"</p><hr><small><dl class='dl-horizontal'><dt>ISBN</dt><dd>"+bookarrayobj[i].getisbn()+"</dd><dt>Edition language</dt><dd>"+bookarrayobj[i].getlanguage()+"</dd><dt>Date  of publication</dt><dd>"+bookarrayobj[i].getdopublication()+"</dd><dt>Publisher</dt><dd>"+bookarrayobj[i].getpublisher()+"</dd></dl></small><hr></div></div></div></div></div></div><div class='span8'><blockquote><h4>"+bookarrayobj[i].getschedule()+"</h4><small>"+bookarrayobj[i].getauthname()+"</small></blockquote></div></div></div><small class='text-info' >Rating: "+bookarrayobj[i].getrating()+" &nbsp;&nbsp; "+bookarrayobj[i].getratings()+" Ratings &nbsp;&nbsp; "+bookarrayobj[i].getrevivew()+" Reviews</small></div>";
		}
		else
		{
		noactive += "<div class='item'><div class='row-fluid'><div class='row-fluid'><div class='span4'><a href='#imgCarou2"+i+"' data-toggle='modal'><img src='"+bookarrayobj[i].getbimg()+"' style='height: 150px;width: 160px;'  class'img-polaroid' ></a><br><br><br><div id='imgCarou2"+i+"' class='modal hide fade' tabindex='-1' role='dialog aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-body' style='min-height:500px;'><div class='thumbnail'><div class='row-fluid'><div class='span3'><br><img src='"+bookarrayobj[i].getbimg()+"' style='height: 220px;width: 160px;' class='img-polaroid'><br><br><div class='btn-group'><div class='btn-group'><button class='btn btn-info btn-small dropdown-toggle' data-toggle='dropdown'>Info <span class='caret'></span></button><ul class='dropdown-menu'><small><li><a href='#'>Read this book</a></li><li><a href='#'>Rate this book</a></li><li><a href='#'>Buy this book</a></li><li class='divider'></li><li><a href='#'>Search online</a></li></small></ul></div></div><span class='seostars'></span></div><div class='span1'></div><div class='span8'><h3>"+bookarrayobj[i].getbname()+"</h3><small class='muted' >"+bookarrayobj[i].getauthname()+"</small><br><small class='text-success'>Rating: "+bookarrayobj[i].getrating()+" &nbsp;&nbsp; "+bookarrayobj[i].getratings()+" Ratings &nbsp;&nbsp; "+bookarrayobj[i].getrevivew()+" Reviews</small><br><br><p>"+bookarrayobj[i].getcontent()+"</p><hr><small><dl class='dl-horizontal'><dt>ISBN</dt><dd>"+bookarrayobj[i].getisbn()+"</dd><dt>Edition language</dt><dd>"+bookarrayobj[i].getlanguage()+"</dd><dt>Date  of publication</dt><dd>"+bookarrayobj[i].getdopublication()+"</dd><dt>Publisher</dt><dd>"+bookarrayobj[i].getpublisher()+"</dd></dl></small><hr></div></div></div></div></div></div><div class='span8'><blockquote><h4>"+bookarrayobj[i].getschedule()+"</h4><small>"+bookarrayobj[i].getauthname()+"</small></blockquote></div></div></div><small class='text-info' >Rating: "+bookarrayobj[i].getratings()+" &nbsp;&nbsp; "+bookarrayobj[i].getratings()+" Ratings &nbsp;&nbsp; "+bookarrayobj[i].getrevivew()+" Reviews</small></div>";
		}
		}
	 return active+noactive ;
	 
	 }
	