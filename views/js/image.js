(function(){
	var planes = document.querySelectorAll('a-plane')
	const length = planes.length
	for(let i = 0; i < length; i++){
		const plane = planes[i]
		const nextPlane = planes[(i + 1)%length]
		const color = nextPlane.getAttribute('color')
		plane.addEventListener('mouseenter', function(){
			plane.setAttribute('scale', '1.2 1.2 1.2')
			nextPlane.setAttribute('color', 'pink')
		})
		plane.addEventListener('mouseleave', function(){
			plane.setAttribute('scale', '1 1 1')
			nextPlane.setAttribute('color', color)
		})
	}
}())