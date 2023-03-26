function colour() {
	var colnumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	
	var hex = '';

	for (var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * colnumber.length);

		hex += colnumber[random];


	}

	document.getElementById('hex-code').innerHTML = hex;
	document.getElementsByTagName('body')[0].style.background = '#' + hex;
}

