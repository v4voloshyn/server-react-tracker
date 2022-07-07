import { MdPlayCircle } from 'react-icons/md';
import styled from 'styled-components';

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	min-width: 200px;
	display: flex;
	flex-direction: row;
`;

export const Title = styled.h1`
	margin-bottom: 35px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 15px;
	padding-right: 35px;
	font-size: 16px;
	border-radius: 30px;
	border: 1px solid black;
`;

export const PlayIcon = styled(MdPlayCircle)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	color: #9ff963;
	& > :hover {
		color: #39fb46;
	}
`;
