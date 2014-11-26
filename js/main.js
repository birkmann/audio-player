var audio = document.getElementById('audio');

function play() {
	audio.play();
}

function pause() {
	audio.pause();
}

function stop() {
	audio.pause();
	audio.currentTime = 0;
}

function rewind() {
	audio.currentTime = 0;
}

audio.addEventListener("timeupdate",function(){
	document.querySelector('.current-time').innerHTML =  Math.floor(audio.currentTime);
});

document.querySelector('.duration').innerHTML = Math.floor(audio.duration);

document.querySelector('.waveform').addEventListener('click', function(e) {
	getCursorPosition(document.querySelector('.waveform'), event);
});

function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
}