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