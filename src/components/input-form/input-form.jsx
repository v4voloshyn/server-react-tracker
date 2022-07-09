import { Input, InputWrapper, Title } from './input-form.style';

import Button from '../UI/Button/Button';
import { MdPlayCircle } from 'react-icons/md';
import { addTrackAsync } from '../../store/track-slice/action-creator';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const InputForm = () => {
	const [trackName, setTrackName] = useState('');
	const [addStatus, setAddStatus] = useState(false);

	const dispatch = useDispatch();

	const handleInput = (e) => {
		setTrackName(e.target.value);
	};

	const handleAddTrack = () => {
		setAddStatus(true);
		new Promise((resolve) => {
			const newTrack = {
				id: nanoid(),
				name: trackName || `${Date.now()}`,
				startedAt: Date.now(),
				isPaused: false,
				count: 0,
			};
			resolve(dispatch(addTrackAsync(newTrack)));
		})
			.then(() => setAddStatus(false))
			.catch(console.log('Promise Error'));

		setTrackName('');
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
					disabled={addStatus}
				/>
				<Button disabled={addStatus} onClick={handleAddTrack}>
					<MdPlayCircle title='Add track' />
				</Button>
			</InputWrapper>
		</>
	);
};

export default InputForm;
