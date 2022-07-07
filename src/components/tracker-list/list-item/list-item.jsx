import { ButtonsContainer, TRow } from '../tracker-list.style';
import { MdDeleteOutline, MdPauseCircleOutline } from 'react-icons/md';

import React from 'react';

const ListItem = () => {
	return (
		<TRow>
			<td>1</td>
			<td>Tracker number one</td>
			<td>99:29:59</td>
			<td>
				<ButtonsContainer>
					<MdPauseCircleOutline size={'2em'} />
					<MdDeleteOutline size={'2em'} />
				</ButtonsContainer>
			</td>
		</TRow>
	);
};

export default ListItem;
