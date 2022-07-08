import { Input, InputWrapper, PlayIcon, Title } from './input-form.style';

import { addTrackAsync } from '../../store/track-slice/action-creator';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const InputForm = () => {
	const [trackName, setTrackName] = useState('');
	const dispatch = useDispatch();

	const handleInput = (e) => {
		setTrackName(e.target.value);
	};

	const handleAddTrack = () => {
		const newTrack = {
			id: nanoid(),
			name: trackName || `${Date.now()}`,
			startedAt: Date.now(),
			isPaused: false,
			count: 0,
		};

		dispatch(addTrackAsync(newTrack));
	};

	return (
		<>
			<Title>tracker</Title>
			<InputWrapper>
				<Input
					type='text'
					placeholder='Enter tracker name'
					value={trackName}
					onChange={handleInput}
				/>
				<PlayIcon size={'3.25rem'} onClick={handleAddTrack} />
			</InputWrapper>
		</>
	);
};

export default InputForm;
