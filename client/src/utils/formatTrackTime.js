export const formatTrackTime = (countInSeconds) => {
	let h = Math.floor(countInSeconds / 3600);
	let m = Math.floor((countInSeconds / 60) % 60);
	let s = countInSeconds - h * 3600 - m * 60;
	if (h < 10) {
		h = '0' + h;
	}
	if (m < 10) {
		m = '0' + m;
	}
	if (s < 10) {
		s = '0' + s;
	}

	return `${h}:${m}:${s}`; // Return is HH:MM:SS
};
