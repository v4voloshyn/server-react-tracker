import {
	ButtonsContainer,
	ClearIcon,
	PauseIcon,
	PlayIcon,
} from './list-item-style';
import {
	removeTrackAsync,
	updateTrackAsync,
} from '../../../store/track-slice/action-creator';

import { TRow } from '../tracker-list.style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTimer } from '../../../hooks/useTimer';

const ListItem = ({ id, name, idx, count, isPaused }) => {
	const { isPause, time, start, stop } = useTimer({
		timerName: name,
		count,
		isPaused,
	});

	const dispatch = useDispatch();

	const toggleTrack = () => {
		isPause ? start() : stop();

		dispatch(
			updateTrackAsync({
				id,
				count: time,
				isPaused: !isPause,
				startedAt: Date.now(),
			})
		);
	};

	useEffect(() => {
		if (!isPause) start();
		// eslint-disable-next-line
	}, []);

	return (
		<TRow isPause={!isPause}>
			<td>{idx}</td>
			<td>{name}</td>
			<td>{time}</td>
			<td>
				<ButtonsContainer>
					{isPause ? (
						<PlayIcon onClick={toggleTrack} size={'2em'} hover='true	' />
					) : (
						<PauseIcon onClick={toggleTrack} size={'2em'} />
					)}
					<ClearIcon
						size={'2em'}
						onClick={() => dispatch(removeTrackAsync(id))}
					/>
				</ButtonsContainer>
			</td>
		</TRow>
	);
};

export default ListItem;
