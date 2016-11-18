$(document).ready(function() {
	$("#announcements").draggable();
	$("#announcements").resizable({
		handles: "s, e, w, se, sw",
		autoHide:true
	  	
	});
	
	$(".x").click(function(){
		$("#announcements").hide();
	});
	$("#albumsbutton").click(function() {
		//$("dropdownimgdiv")
	});
});