$(function(){
	var h = $(window).height();
	$('.div-mv').css('height', h + 'px');
	$(window).resize(function() {
		var h = $(window).height();
		$('.div-mv').css('height', h + 'px');
	});
	$('.section-case_slider').slick({
		variableWidth: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		arrows: true,
		dots: true,
		infinite: true,
		centerMode: false,
		prevArrow:'<div class="slick-prev"><i class="icon-yl"></i></div>',
		nextArrow:'<div class="slick-next"><i class="icon-yr"></i></div>',
		responsive: [{
			breakpoint: 768,
			settings: {
				centerMode: true,
			}
		},{
			breakpoint: 480,
			settings: {
				centerMode: true,
			}
		}],
	});
	$('.section-service_inner-content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
//		asNavFor: '.section-service_inner-tab',
	});
	$('.section-service_inner-tab').slick({
		slidesToShow: 4,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		asNavFor: '.section-service_inner-content',
	});
	$('.section-service_inner-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.section-service_inner-tab_slide').eq(currentSlide).addClass('slick-close');
		$('.section-service_inner-tab_slide').eq(currentSlide).removeClass('slick-current');
	});
	$('.section-service_inner-content').on('afterChange', function(event, slick, currentSlide){
		$('.section-service_inner-tab_slide').eq(currentSlide).removeClass('slick-close');
		$('.section-service_inner-tab_slide').eq(currentSlide).addClass('slick-current');
	});
	$( '.article-case' ).on('click', function() {
		if (!$(this).hasClass("hover")) {
			$(this).addClass( 'hover' );
		}else{
			$(this).removeClass( 'hover' );
		}
	});
});
function fadeAnime(){
	$('.trigger').each(function(){
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
			$(this).addClass('fade');
		}else{
			$(this).removeClass('fade');
		}
	});
}
function delayScrollAnime() {
	var time = 0.2;
	var value = time;
	$('.delay').each(function () {
		var parent = this;					//親要素を取得
		var elemPos = $(this).offset().top;//要素の位置まで来たら
		var scroll = $(window).scrollTop();//スクロール値を取得
		var windowHeight = $(window).height();//画面の高さを取得
		var childs = $(this).children();	//子要素を取得
		
		if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
			$(childs).each(function () {
				
				if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
					
					$(parent).addClass("play");	//親要素にクラス名playを追加
					$(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
					$(this).addClass("fadeUp");//アニメーションのクラス名を追加
					value = value + time;//delay時間を増加させる
					
					//全ての処理を終わったらplayを外す
					var index = $(childs).index(this);
					if((childs.length-1) == index){
						$(parent).removeClass("play");
					}
				}
			})
		}else {
			$(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
			value = time;//delay初期値の数値に戻す
		}
	})
}
$(window).scroll(function (){
	fadeAnime();
	delayScrollAnime();
});