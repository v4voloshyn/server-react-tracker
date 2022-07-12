import { Container, FormWrapper } from './Home.style';

import Header from '../../components/header/Header';
import InputForm from '../../components/input-form/InputForm';
import TrackerList from '../../components/tracker-list/TrackerList';
import { fetchTracksAsync } from '../../store/track-slice/action-creator';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTracksAsync());
	}, [dispatch]);

	return (
		<Container>
			<Header />
			<FormWrapper>
				<InputForm />
				<TrackerList />
			</FormWrapper>
		</Container>
	);
};

export default Home;
