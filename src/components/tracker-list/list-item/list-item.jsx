import { ButtonsContainer, TRow } from '../tracker-list.style';
import {
	MdDeleteOutline,
	MdPauseCircleOutline,
	MdPlayCircleOutline,
} from 'react-icons/md';
import {
	removeTrackAsync,
	updateTrackAsync,
} from '../../../store/track-slice/action-creator';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTimer } from '../../../hooks/useTimer';

const ListItem = ({ id, name, idx, count, isPaused }) => {
	const { isPause, time, start, stop } = useTimer(name, count, isPaused);

	const dispatch = useDispatch();

	const toggleTrack = () => {
		isPause ? start() : stop();
	};

	const updateOnPageLeave = () => {
		const newBody = {
			id,
			count: 22,
			isPaused: isPause,
			startedAt: Date.now(),
		};
		dispatch(updateTrackAsync(newBody));
	};
	const alertUser = () => alert('Data may not save!');

	useEffect(() => {
		if (!isPause) start();

		// window.addEventListener('beforeunload', (event) => {
		// 	updateOnPageLeave();
		// 	event.returnValue = '';
		// });

		window.addEventListener('unload', (e) => {
			e.preventDefault();
			updateOnPageLeave();
		});

		return () => {
			// window.removeEventListener('beforeunload', alertUser);
			window.removeEventListener('unload', updateOnPageLeave);
		};
	}, []);

	return (
		<TRow isPause={!isPause}>
			<td>{idx}</td>
			<td>{name}</td>
			<td>{time}</td>
			<td>
				<ButtonsContainer>
					{isPause ? (
						<MdPlayCircleOutline onClick={toggleTrack} size={'2em'} />
					) : (
						<MdPauseCircleOutline onClick={toggleTrack} size={'2em'} />
					)}
					<MdDeleteOutline
						size={'2em'}
						onClick={() => dispatch(removeTrackAsync(id))}
					/>
				</ButtonsContainer>
			</td>
		</TRow>
	);
};

export default ListItem;
