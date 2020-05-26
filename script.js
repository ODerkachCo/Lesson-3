var count = 1;
var startTimer;
var number = document.getElementById('number');
var clearBtn = document.querySelector('input[value="Clear"');


function output(){
	if (count <= 30){
		number.innerHTML = count++;
	} else {
		clearInterval(startTimer);
	}
}
function start(){
	startTimer = setInterval(output, 1000);
}


function stop() {
	clearInterval(startTimer);
}

function clear() {
	count = 1
	document.getElementById('number').innerHTML = count;
}
clearBtn.onclick = clear; //пришлось воспользоваться этим способом, потому что onlick c html не работал, сто раз пересматривал всё правильно было, а это сработало!

