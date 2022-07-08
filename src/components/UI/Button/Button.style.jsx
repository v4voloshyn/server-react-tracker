import styled from 'styled-components';

export const Btn = styled.button`
	padding: 0;
	width: 3.25rem;
	height: 3.25rem;
	overflow: hiiden;
	background-color: transparent;
	border: none;
	border-radius: 50%;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	& > svg {
		color: #39fb46;
		z-index: 10;
		fill: #aae;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
	}

	&:hover > svg,
	&:focus > svg {
		fill: green;
	}

	&:disabled > svg {
		fill: lightgray;
		cursor: not-allowed;
	}
`;
