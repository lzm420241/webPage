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

  // $('[data-toggle="popover"]').on('show.bs.popover',function(){
  // 	$(".popover-content").append('<img src="images/qr.jpg">');
  // 	alert("hello");
  // });
})