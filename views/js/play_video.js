(function(){
	//find video element
	const video = document.getElementById('video')
	//pause the video
	video.pause()
	//find plane that has video
	const videoPlane = document.querySelector('a-video')
	videoPlane.addEventListener('mouseenter', () => {
		videoPlane.setAttribute('scale', '1.2 1.2 1.2')
		video.play()
	})
	videoPlane.addEventListener('mouseleave', () => {
		videoPlane.setAttribute('scale', '1 1 1')
		video.pause()
	})
}())