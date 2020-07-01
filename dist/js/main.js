$( document ).ready(function() {   
      
  setHeightColorItem();

	$('.goto').click(function() {
		var section = $(this).attr('href');
		$("html, body").animate({ scrollTop: $(section).offset().top }, 1000);
		return false;
	});

	// Experience accordion -> icon changes
	$('.collapse').on('show.bs.collapse', function(){
		$(this).closest('.timeline-block').find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
	}).on('hide.bs.collapse', function(){
		$(this).closest('.timeline-block').find(".icon-minus").removeClass("icon-minus").addClass("icon-plus");
	});

	// Fill in the progress bar
	$('.progress-radial').attr('data-progress', 100);
  
});

$( window ).resize(function() {  
  setHeightColorItem();
});

$(function() {

  $(window).scroll(function() {
   /* if(isVisible($(".about-me"))){
    	$(".about-me-aux").addClass("in-view");
    }
    */
  });

});

// Set profile-image -> height = profile-image -> width
function setHeightBox(){
	var width = $('.profile-image').width();

    $('.profile-image').height(width);
}

function setHeightColorItem(){
  var width = $('.color-item').width();

    $('.color-item').height(width);
}

// Check if element is visible in screen
function isVisible(element) {
   var bottom_of_object = element.offset().top + element.outerHeight();
   var bottom_of_window = $(window).scrollTop() + $(window).height();
   
   if( bottom_of_window > bottom_of_object ) {
       return true;
   } else {
       return false;
   }
}

