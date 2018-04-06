$(document).ready(function(){
	setTimeout(function(){
		$('.splash').fadeOut('slow')
	},1900);
	$('.toggle').click(function(){
		$('.nav-mb').slideToggle("400");
	});
// splash
	var modal=$('.modal-search');
	var btnsearch=$('.btn-search');
	var btnx=$('.btnx');
	btnsearch.click(function(event){
		modal.fadeIn("400");
	});
	btnx.click(function(event) {
		modal.fadeOut("400");
	});
	var ct = $(".content-footer");
	ct.hide();
	$(".copyright").click(function(){
		if(ct.is(':hidden')){
		ct.fadeIn("400");
		}
		else{
			ct.fadeOut("400");
		}
	});
	$('.copyright h2').click(function(event){
		$('i', this).toggleClass('fa-angle-double-up fa-angle-double-down');
	});
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
	var acc = $('.group-content');
	acc.hide();
	acc.first().show();
	$('.group-list h2').click(function(){
		acc.slideUp();
		$(this).parent().find('.group-content').slideToggle('400');
	});

	$('.fancybox').fancybox();
})