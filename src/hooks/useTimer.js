import { useEffect, useRef, useState } from 'react';

export const useTimer = (timerName, count = 0, isPaused = true) => {
	const [time, setTime] = useState(count);
	const [isPause, setPause] = useState(isPaused);

	const timeRef = useRef(null);

	const start = () => {
		setPause(false);
		timeRef.current = setInterval(() => {
			setTime((prevCount) => prevCount + 1);
		}, 1000);
	};

	const stop = () => {
		setPause(true);
		clearInterval(timeRef.current);
	};

	// useEffect(() => {
	// 	localStorage.setItem('timerName', timerName);
	// }, [time, timerName]);

	useEffect(() => {
		return () => clearInterval(timeRef.current);
	}, []);

	return {
		time,
		start,
		stop,
		isPause,
	};
};
