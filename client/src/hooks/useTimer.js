import { useEffect, useRef, useState } from 'react';

export const useTimer = ({ secondsCount = 0, isPaused = true }) => {
	const [time, setTime] = useState(secondsCount);
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
