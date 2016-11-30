$(document).ready(function() {
	setTimeout(function() {
		$("#fixed-navbar").fadeTo("slow", 0);
	}, 1000);

	$("#fixed-navbar").hover(
		function() {
			console.log('hovered');
			$("#fixed-navbar").fadeTo(0, 1.0);

			
		},
		function() {
			if (!($("#albumsbutton").hasClass("albumsbutton-active"))) {
				$("#fixed-navbar").fadeTo("slow", 0);
			}
			
				
			
		}
	);
	$(".navbutton").hover(
		function() {
			$(this).addClass('large');
		}, 
		function() {
			if ($("#albumsbutton").hasClass("albumsbutton-active")) {} else {
			$(this).removeClass('large');
		}
      	
	});


	$("#albumsbutton").click(function() {
		if ($("#albumsbutton").hasClass("albumsbutton-active")) {
			$("#dropdown").rotate({angle: 180, animateTo: 360});
			$("#albumview-container").slideUp({speed: 'slow'});
			$("#albumsbutton").removeClass("albumsbutton-active");
			$(this).removeClass('large');

		} else {
			$("#dropdown").rotate({angle: 360, animateTo: 180});
			$("#albumview-container").slideDown({speed: 'slow'});
			$("#albumsbutton").addClass("albumsbutton-active");
			
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
	$('#home').click(function() {
		window.location = "./index.html";
	})

	$(".arrow").hover(
		function() {
			$(this).addClass('arrowselected');
		}, 
		function() {
			
			$(this).removeClass('arrowselected');
			
		}
	);
      	
});