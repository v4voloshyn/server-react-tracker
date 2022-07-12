import {
	ButtonsContainer,
	ClearIcon,
	CustomButton,
	PauseIcon,
	PlayIcon,
} from './ListItem.style';
import {
	removeTrackAsync,
	updateTrackAsync,
} from '../../../store/track-slice/action-creator';
import { useEffect, useState } from 'react';

import { TRow } from '../TrackerList.style';
import { formatTrackTime } from '../../../utils/formatTrackTime';
import { useDispatch } from 'react-redux';
import { useTimer } from '../../../hooks/useTimer';

const ListItem = ({ id, name, idx, count, isPaused }) => {
	const { isPause, time, start, stop } = useTimer({
		timerName: name,
		count,
		isPaused,
	});

	const [isDeleting, setIsDeleting] = useState(false);

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

	const deleteTrack = (trackId) => {
		setIsDeleting(true);
		Promise.resolve(dispatch(removeTrackAsync(trackId)))
			.then(() => setIsDeleting(false))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		if (!isPause) start();
		// eslint-disable-next-line
	}, []);

	return (
		<TRow isPause={!isPause}>
			<td>{idx}</td>
			<td>{name}</td>
			<td>{formatTrackTime(time)}</td>
			<td>
				<ButtonsContainer>
					<CustomButton>
						{isPause ? (
							<PlayIcon onClick={toggleTrack} size={'2em'} title='Play track' />
						) : (
							<PauseIcon
								onClick={toggleTrack}
								size={'2em'}
								title='Pause track'
							/>
						)}
					</CustomButton>
					<CustomButton
						disabled={isDeleting}
						onClick={() => deleteTrack(id)}
						title='Delete track'
					>
						<ClearIcon size={'2em'} />
					</CustomButton>
				</ButtonsContainer>
			</td>
		</TRow>
	);
};

export default ListItem;
