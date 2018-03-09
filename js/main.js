$(function() {
	var start = document.getElementById("start")
	var mySwiper = new Swiper ('.swiper-container', {
	direction: 'vertical',
	// 如果需要分页器
	pagination: '.swiper-pagination',
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); 
		} 
	}) 
})