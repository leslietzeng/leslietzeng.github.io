$(document).ready(function() {
	$("#announcements-button").hide();
	$("#announcements").draggable({
		containment: "parent"
	});
	$("#announcements").resizable({
		handles: "s, e, w, se, sw",
		autoHide:true
	  	
	});
	$(".navbutton").hover(function() {
		$(this).addClass('large');
	}, 
	function() {
		// setTimeout(function() {
			if ($("#albumsbutton").hasClass("albumsbutton-active")) {} else {
			$(this).removeClass('large');}
      	// }, 1);
		
	});


	$(".x").click(function(){
		$("#announcements").hide();
		$("#announcements-button").show();
	});
	$("#announcements-button").click(function(){
		$("#announcements").show();
		$("#announcements-button").hide();
	});

	$("#albumsbutton").click(function() {
		if ($("#albumsbutton").hasClass("albumsbutton-active")) {
			$("#dropdown").rotate({angle: 180, animateTo: 360});
			$("#albumview-container").slideUp({speed: 'slow'});
			$("#albumsbutton").removeClass("albumsbutton-active");
			$("#background").fadeTo( "slow" , 1.0);
			if ($("#announcements").css("display") == "none") {
				$("#announcements-button").fadeTo( "slow" , 1.0);
			} else {
				$("#announcements").fadeTo( "slow" , 1.0);
			}
			$(this).removeClass('large');

		} else {
			$("#dropdown").rotate({angle: 360, animateTo: 180});
			$("#albumview-container").slideDown({speed: 'slow'});
			$("#albumsbutton").addClass("albumsbutton-active");
			$("#background").fadeTo( "slow" , 0.5);
			if ($("#announcements").css("display") == "none") {
				$("#announcements-button").fadeTo( "slow" , 0.5);
			} else {
				$("#announcements").fadeTo( "slow" , 0.5);
			}
			$(this).addClass('large');
		}
		
	});
	$(".album").hover(
		function() {
			$(this).children('div').addClass("img-selected"); 
			$(this).addClass("selected");
		},
		function() {
			$(this).children('div').removeClass("img-selected");
			$(this).removeClass("selected");
		}
	);
	$('.album').click(function() {
	   window.location = "./albumview.html"
	});
});