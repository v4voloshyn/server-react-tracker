import {
	MdClear,
	MdPauseCircleOutline,
	MdPlayCircleOutline,
} from 'react-icons/md';

import styled from 'styled-components';

export const CustomButton = styled.button`
	display: flex;
	align-items: center;
	width: 2rem;
	height: 2rem;
	padding: 0;
	background-color: transparent;
	border: none;
	cursor: pointer;
	&:disabled {
		cursor: not-allowed;
	}
	& > svg {
		transition: all 0.3s ease-in;
		width: 100%;
	}
`;

export const PlayIcon = styled(MdPlayCircleOutline)`
	color: black;
	&:hover {
		fill: #4ef34e;
	}
`;
export const PauseIcon = styled(MdPauseCircleOutline)`
	color: black;
	&:hover {
		fill: tomato;
	}
`;

export const ClearIcon = styled(MdClear)`
	color: black;
	&:hover {
		fill: tomato;
	}
`;

export const ButtonsContainer = styled.div`
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
