import { Colgroup, TBody, TRow, Table } from './TrackerList.style';

import ListItem from './list-item/ListItem';
import { MdDeleteOutline } from 'react-icons/md';
import Spinner from '../UI/Spinner/Spinner';
import { selectTrackSlice } from '../../store/track-slice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllTracksAsync } from '../../store/track-slice/action-creator';

const TrackerList = () => {
	const { tracks: trackList, isLoading, error } = useSelector(selectTrackSlice);

	const dispatch = useDispatch();

	const clearAllTracks = () => {
		const areYouSure = window.confirm(
			'Do you really want to clear all tracks?'
		);

		if (areYouSure) {
			dispatch(clearAllTracksAsync());
		}
	};

	if (isLoading) return <Spinner />;

	if (!trackList.length && !error) return <h2>Start your first track</h2>;

	return (
		<>
			{error && <div>Wooopps, {error}</div>}
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
					{trackList.map((track, idx) => (
						<ListItem key={track._id} idx={idx + 1} {...track} />
					))}
				</TBody>
			</Table>
		</>
	);
};

export default TrackerList;
