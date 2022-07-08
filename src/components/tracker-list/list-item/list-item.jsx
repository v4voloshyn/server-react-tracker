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
	const { isPause, time, start, stop } = useTimer({ name, count, isPaused });

	const dispatch = useDispatch();

	const toggleTrack = () => {
		isPause ? start() : stop();

		dispatch(
			updateTrackAsync({
				id,
				// name: 'Updated 2!',
				count: time,
				isPaused: !isPause,
				startedAt: Date.now(),
			})
		);
	};

	useEffect(() => {
		if (!isPause) start();
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
