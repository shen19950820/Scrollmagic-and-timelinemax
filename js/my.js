
// 一、滚动魔法控制器
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        reverse: true
    }
});


// 二、时间轴动画

// 1.根据x,y,z轴移动
var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
			.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-50%"})
			.to("#slideContainer", 0.5, {z: 0})
			// animate to forth panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-75%"})
			.to("#slideContainer", 0.5, {z: 0});


// 2.图片x,y轴移动
var myTimeline = new TimelineMax();
myTimeline
    .add(
        TweenMax.to('.img1', 12, { y: '0' },{y:'-100%'})
    )
    .add(TweenMax.to('.img2', 12, { y: '0', delay: 1 },{y:'-100%'}))

    .add(TweenMax.to('.img3', 12, { y: '0', delay: 2 },{y:"-100%"}))
// 3.
// var myclass = new TimelineMax()
// .add()


// 三、滚动场景布置
// 1.
new ScrollMagic.Scene({
	triggerElement: "#pinContainer",
	triggerHook: "onLeave",
	duration: "500%"
})
.setPin("#pinContainer")
.setTween(wipeAnimation)
.addTo(controller);
// 2.
var animation_steps_mob = new ScrollMagic.Scene({
    triggerElement: '#trigger_demo',
    duration: '300%',
    triggerHook: 0,
})
    .setTween(myTimeline)
    .setPin('.se-img')
    .addTo(controller);

	// 3
new ScrollMagic.Scene({
		triggerElement:"#trigger-box",
		duration:"300"
	})
	// .setClassToggle(".box-active","active")
	.on('progress', function (event) {
		if (event.scrollDirection == 'FORWARD') {
			if (event.progress > 0.3 && event.progress < 0.6) {
				$('.box-active>img').removeClass('active')
				$('.box-active>img:eq(1)').addClass('active')
			} else if (event.progress > 0.4) {
				$('.box-active>img').removeClass('active')
				$('.box-active>img:eq(2)').addClass('active')
			}
		} else if (event.scrollDirection == 'REVERSE') {
			if (event.progress > 0.3 && event.progress < 0.6) {
				$('.box-active>img').removeClass('active')
				$('.box-active>img:eq(1)').addClass('active')
			} else if (event.progress < 0.2) {
				$('.box-active>img').removeClass('active')
				$('.box-active>img:eq(0)').addClass('active')
			}
		}
	})
	.addTo(controller)
