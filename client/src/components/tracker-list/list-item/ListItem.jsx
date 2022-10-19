import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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

import { TRow } from '../TrackerList.style';
import { formatTrackTime } from '../../../utils/formatTrackTime';
import { useTheme } from '../../../hooks/useTheme';
import { useTimer } from '../../../hooks/useTimer';

const ListItem = ({ _id, title, idx, secondsCount, isPaused }) => {
	const { isPause, time, start, stop } = useTimer({
		secondsCount,
		isPaused,
	});

	const [isDeleting, setIsDeleting] = useState(false);

	const { theme } = useTheme();

	const dispatch = useDispatch();

	const toggleTrack = () => {
		isPause ? start() : stop();

		dispatch(updateTrackAsync(_id));
	};

	const deleteTrack = (trackId) => {
		setIsDeleting(true);

		Promise.resolve(dispatch(removeTrackAsync(trackId)))
			.then(() => setIsDeleting(false))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		if (!isPause) start();
	}, [start, isPause]);

	return (
		<TRow isPause={isPause} theme={theme}>
			<td>{idx}</td>
			<td title={title}>{title}</td>
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
						onClick={() => deleteTrack(_id)}
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
