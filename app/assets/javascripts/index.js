

// Java script 
$(document).ready(function() {
    var showChar = 50;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more >";
    var lesstext = "Show less";
    


    $('.more').each(function() {
  	
        var content = $(this).html();
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="less">' + ellipsestext+ '&nbsp;</span><span class="morecontent" ><span style=" display: none">' +
            h + '</span>&nbsp;&nbsp;<a href="" class="morelink" style="color: #989aa1;">' + moretext + '</a></span>';
            
            $(this).html("")
            $(this).html(html);           
        }
       
    });
    
    
   $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);//lesstext
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);//moretext
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
  /*  if(localStorage.getItem("dialogCloseFlag")!="false"){
		  $("#contactDialogDiv1").load("contactDialog");
		  $("#contactDialogDiv1").dialog('open');
	  }
    if(typeof(Storage) !== "undefined" && localStorage.getItem("dialogCloseFlag") !="false") {
	    // first time loaded!
		localStorage.setItem("dialogCloseFlag","true");
	}
 $( "#contactDialogDiv1" ).dialog({
	    autoOpen: true,
	    title:'Join Us',
	    titleIsHtml: true , 
	    width: 500,
	    height:325,
	    close: function(event, ui){
	       
	    	 localStorage.setItem("dialogCloseFlag","false");
	    	$( "#uperContactDialog").html("");
	       $(this).dialog("close"); 
	     }
	    
	  });*/
});

$(window).load(function() {

	 /* if(localStorage.getItem("dialogCloseFlag")!="false"){
		  $("#contactDialogDiv1").load("contactDialog.html");
		  $("#contactDialogDiv1").dialog('open');
	  }
*/	  	
});



