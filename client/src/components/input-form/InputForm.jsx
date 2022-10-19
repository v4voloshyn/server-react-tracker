import { Input, InputWrapper, Title } from './InputForm.style';

import Button from '../UI/Button/Button';
import { MdPlayCircle } from 'react-icons/md';
import { addTrackAsync } from '../../store/track-slice/action-creator';
import { setTrackTitle } from '../../utils/setTrackTitle';
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
		const formattedTrackName = trackName || setTrackTitle();

		new Promise((resolve) => {
			const newTrack = { title: formattedTrackName };

			resolve(dispatch(addTrackAsync(newTrack)));
		})
			.then(() => setAddStatus(false))
			.catch((e) => console.log(e.message));

		setTrackName('');
	};

	return (
		<>
			<Title>tracker</Title>
			<InputWrapper>
				<Input
					type='text'
					placeholder='Enter track name'
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
