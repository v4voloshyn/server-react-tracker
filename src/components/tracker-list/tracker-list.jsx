import { Colgroup, TBody, TRow, Table } from './tracker-list.style';

import ListItem from './list-item/list-item';
import { useSelector } from 'react-redux';

const TrackerList = () => {
	const trackList = useSelector((state) => state.track.tracks);

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
					<th></th>
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
