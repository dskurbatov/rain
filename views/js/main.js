(function(){
	
	var scene = document.getElementById('scene');
	var numOfBox = 1000;
	var x = 0;
	var z = 0;
	var value = '0';
	
	function rain(num){
		num++;
		if(num == numOfBox){
			return;
		}
		generateText();
		setTimeout(function(){
			rain(num);
			console.log(num);
		}, 200);
	}



	function generateText(){
		x = getRandom(150, -100);
		z = getRandom(100, -100);

		var text = document.createElement('a-entity');
		var anim = document.createElement('a-animation');
		anim.setAttribute('attribute', 'position');
		anim.setAttribute('to', x.toString() + ' -30 ' + z.toString());
		anim.setAttribute('dur', getRandom(1000, 10000).toString());
		anim.setAttribute('repeat', 'indefinite');
		text.setAttribute('text', 'font: mozillavr; value: ' + ((value == '0') ? value = '1' : value = '0') + '; color: black; width: 10"');
		text.setAttribute('scale', '10 10 10')
		text.setAttribute('position', x.toString() + ' 50 ' + z.toString());
		text.appendChild(anim);
		scene.appendChild(text);
	}
	
	function getRandom(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
	}

	rain(0);
	
}());





