$(function(){
	var url = $(location).attr('href');
	$('.div-top').fadeOut();
	if (url.indexOf("?id=") == -1) {
		// スムーズスクロール以外の処理（必要なら）
	}else{
		// スムーズスクロールの処理
		var url_sp = url.split("?id=");
		var hash   = '#' + url_sp[url_sp.length - 1];
		var tgt    = $(hash);
		var pos    = tgt.offset().top;
		$("html, body").animate({scrollTop:pos}, 'slow', "swing");
	}
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, 'slow', "swing");
		return false;
	});
	$('.header-menu').click(function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$('.header-nav').removeClass('active');
		}else{
			$(this).addClass('on');
			$('.header-nav').addClass('active');
		}
	});
	$('.header-nav li a').click(function(){
		$('.header-nav').removeClass('active');
		$('.header-menu').removeClass('on');
	});
	$(window).scroll(function (){
		var h = $(window).height();
		var scroll = $(window).scrollTop();
		if (scroll >= h){
			$('.div-top').fadeIn();
		}else{
			$('.div-top').fadeOut();
		}
	});
	$('#loader').addClass('on');
	$('#wrap').addClass('on');
});