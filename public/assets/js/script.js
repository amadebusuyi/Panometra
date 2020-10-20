(function($) {
    'use strict'

    $("#nav-toggler").click(function(){
    	if($(this).find("span").data("state") == "close"){
    		$(this).find("span").removeClass("fa-bars animate__flipInY").addClass("fa-times animate__jackInTheBox").data("state", "open");
    	}
    	else{
    		$(this).find("span").removeClass("fa-times animate__jackInTheBox").addClass("fa-bars animate__flipInY").data("state", "close");
    	}
    })

    $("#producer-faq .faq-title").click(function(e){
    	let parent = $(this).parent(".faq-box");
    	if(parent.hasClass("active") == true){
    		parent.removeClass("active");
            parent.find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
    	}
    	else{
    		$(".faq-title").parent(".faq-box").removeClass("active");
    		$(".faq-title").parent(".faq-box").find("i").removeClass("fa-angle-up").addClass("fa-angle-down");

    		parent.addClass("active");
    		parent.find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
    	}
    })

}(jQuery))