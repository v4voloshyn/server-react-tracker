import { useEffect, useRef, useState } from 'react';

export const useTimer = (timerName = Date.now()) => {
	const getDefaultValue = (value) => localStorage.getItem(value);
	const [time, setTime] = useState(Number(getDefaultValue(timerName) || 0));
	const [isPause, setPause] = useState(true);

	const timeRef = useRef(null);

	const start = () => {
		if (timeRef.current && !isPause) return;

		setPause(false);
		timeRef.current = setInterval(() => {
			setTime((prevCount) => prevCount + 1);
		}, 1000);
	};

	const stop = () => {
		if (isPause) {
			setTime(0);
		}
		clearInterval(timeRef.current);
		setPause(true);
	};

	useEffect(() => {
		localStorage.setItem('timerName', timerName);
	}, [time, timerName]);

	useEffect(() => {
		return () => clearInterval(timeRef.current);
	}, []);

	return {
		time,
		start,
		stop,
	};
};
