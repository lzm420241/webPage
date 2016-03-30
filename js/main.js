// $(function(){
// 	$(".show-qr").click(function(){
// 		$(".qr").animate({right:"10px"});
// 		$(this).hide();
// 	});
// 	$(".qr").click(function(){
// 		$(this).animate({right:"-100px"});
// 		$(".show-qr").show();
// 	});
// })

$(function () {
  $('[data-toggle="popover"]').popover();

  $(".qr-pic").click(function(){
  	 $(".popover").toggle();
  });
  if(document.body.scrollTop == 0){
  		$(".back-top").hide();
  	}else{
  		$(".back-top").show();
  	}
   $(window).scroll(function(){
  	if(document.body.scrollTop == 0){
  		$(".back-top").hide();
  	}else{
  		$(".back-top").show();
  	}
  });	
  
})