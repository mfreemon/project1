
$(document).ready(function(){

// simple mousenter functionality//
$(".pumpjack").on("mouseenter", function(){
	$(this).css("background-color", "#ffffff");})
	.on("mouseleave", function(){
		$(".pumpjack").css("background-color", "#848484");
	});



// toogling between hidden content and arrow animation//
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




//skrollr plugin for parallax effect//
var s = skrollr.init({
	forceHeight: false
});



// changes nav bar color on skroll and return to initial color on return//
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





});






