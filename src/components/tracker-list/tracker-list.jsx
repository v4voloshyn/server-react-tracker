import {
	ButtonsContainer,
	Colgroup,
	TBody,
	TRow,
	Table,
} from './tracker-list.style';
import { MdDeleteOutline, MdPauseCircleOutline } from 'react-icons/md';

import ListItem from './list-item/list-item';
import React from 'react';

const TrackerList = ({ trackList }) => {
	return (
		<Table>
			<Colgroup style={{ width: '200px' }}>
				<col />
				<col />
				<col />
				<col />
			</Colgroup>
			<thead>
				<TRow>
					<th></th>
					<th>Track name</th>
					<th>Counting</th>
					<th></th>
				</TRow>
			</thead>
			<TBody>{trackList && trackList.map((track) => <ListItem />)}</TBody>
		</Table>
	);
};

export default TrackerList;
