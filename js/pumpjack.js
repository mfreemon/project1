
$(document).ready(function(){

// simple mousenter functionality//
$(".container1 div").on("mouseenter", function(){
	$(this).css("color", "#09d017");})
	.on("mouseleave", function(){
		$(".container1 div").css("color", "#f5f5f5");
	});



// toogling between hidden content using arrow animation//
$(".interestpara").click (function(){
	$('#careerpara').slideToggle();
	$('#arrow').toggleClass('active');

});


// smooth scrolling to anchor location vs instantaneous jumping to section/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -60
    },  800);
    return false;
});


var navscroll = $(".navbar").offset().top + $(".navbar").height();
$(window).on('scroll', function(){
	stop = Math.round($(window).scrollTop());
	if (stop >= navscroll){
		$(".navbar").addClass("navfloat");
         }
		else
		{
		$(".navbar").removeClass("navfloat");}
});

var $window = $(window);
$('section[data-type = "background"]').each(function(){
	var $bgobj=$(this);
	$(window).scroll(function(){
	var yPos =-($window.scrollTop()/$bgobj.data('speed'));
	var coords = '50%' + yPos + 'px';
	$bgobj.css({backgroundPosition:coords})

	});
});



});
