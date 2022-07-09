import {
	MdClear,
	MdPauseCircleOutline,
	MdPlayCircleOutline,
} from 'react-icons/md';

import styled from 'styled-components';

export const PlayIcon = styled(MdPlayCircleOutline)`
	&:hover {
		fill: #4ef34e;
	}
`;
export const PauseIcon = styled(MdPauseCircleOutline)`
	&:hover {
		fill: tomato;
	}
`;
export const ClearIcon = styled(MdClear)`
	&:hover {
		fill: tomato;
	}
`;

export const ButtonsContainer = styled.span`
	display: flex;
	justify-content: center;
	gap: 10px;
	& > svg {
		cursor: pointer;
		transition: all 0.3s ease-in;
	}

	@media screen and (max-width: 560px) {
		gap: 3px;
	}
`;
