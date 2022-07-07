import { Container, FormWrapper } from './Home.style';
import React, { useState } from 'react';

import InputForm from '../../components/input-form/input-form';
import TrackerList from '../../components/tracker-list/tracker-list';

const Home = () => {
	const [trackList, setTrackList] = useState([]);

	const addTrack = (text) => {};

	return (
		<Container>
			<FormWrapper>
				<InputForm />
				<TrackerList trackList={trackList} />
			</FormWrapper>
		</Container>
	);
};

export default Home;
