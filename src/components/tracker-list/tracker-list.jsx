import { Colgroup, TBody, TRow, Table } from './tracker-list.style';

import ListItem from './list-item/list-item';
import { MdDeleteOutline } from 'react-icons/md';
import Spinner from '../UI/Spinner/Spinner';
import { selectTrackSlice } from '../../store/track-slice/selectors';
import { useSelector } from 'react-redux';

const TrackerList = () => {
	const { tracks: trackList, isLoading, error } = useSelector(selectTrackSlice);

	if (isLoading) return <Spinner />;
	if (error) return <div>Wooopps, {error}</div>;

	if (!trackList.length) return <h2>Start your first track</h2>;

	const clearAllTracks = () => {
		const areYouSure = window.confirm(
			'Do you really want to clear all tracks?'
		);

		if (areYouSure) alert('Sorry, server does not support this function :(');
	};

	return (
		<Table>
			<Colgroup style={{ width: '200px' }}>
				<col />
				<col />
				<col />
				<col />
			</Colgroup>
			<thead>
				<TRow style={{ backgroundColor: 'lightblue' }}>
					<th></th>
					<th>Track name</th>
					<th>Time</th>
					<th style={{ justifySelf: 'flex-end', marginRight: '15px' }}>
						<MdDeleteOutline
							size='1.5rem'
							onClick={clearAllTracks}
							title='Clear all tracks'
						/>
					</th>
				</TRow>
			</thead>
			<TBody>
				{trackList &&
					trackList.map((track, idx) => (
						<ListItem key={track.id} idx={idx + 1} {...track} />
					))}
			</TBody>
		</Table>
	);
};

export default TrackerList;
