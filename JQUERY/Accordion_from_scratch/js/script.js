$(document).ready(function(){
	$(".content").slideUp();

	$(".title").click(function(){
		$(".arrow").not($(this).children(".arrow")).text("+");  //resetting arrows to + except for self.

		$(".content").not($(this).siblings(".content")).slideUp(); // closing all sliders except for self.

    	$(this).siblings(".content").slideToggle();  //toggling slider

		$(".title").not($(this)).removeClass("active");  //removing class from all except self.
		$(this).toggleClass("active");	//setting self class
		
		if($(this).children(".arrow").text()=="+")
			$(this).children(".arrow").text("-");
		else
			$(this).children(".arrow").text("+");
	});

});


