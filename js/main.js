$(function () {
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
