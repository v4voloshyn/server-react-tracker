import { useEffect, useRef, useState, useCallback } from 'react';

export const useTimer = ({ secondsCount = 0, isPaused = true }) => {
	const [time, setTime] = useState(secondsCount);
	const [isPause, setPause] = useState(isPaused);

	const timeRef = useRef(null);

	const start = useCallback(() => {
		setPause(false);
		timeRef.current = setInterval(() => {
			setTime((prevCount) => prevCount + 1);
		}, 1000);
	}, []);

	const stop = useCallback(() => {
		setPause(true);
		clearInterval(timeRef.current);
	}, []);

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
