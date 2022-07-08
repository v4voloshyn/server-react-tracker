import styled from 'styled-components';

export const Table = styled.table`
	margin-top: 20px;
	max-width: 90vw;
	width: 100%;
	min-width: 300px;
`;

export const TBody = styled.tbody`
	width: 100%;

	@media screen and (max-width: 560px) {
		& > tr {
			font-size: 12px;
		}
	}
`;

export const TRow = styled.tr`
	display: grid;
	padding: 0 10px;
	margin-top: 4px;
	height: 40px;
	grid-template-columns: 30px 3fr 1fr 1fr;
	align-items: center;
	font-size: 18px;
	transition: all 0.3s ease-in;
	background-color: ${({ isPause }) =>
		isPause ? 'rgba(30, 239, 44, 0.5)' : 'lightyellow'};
	border-top: 1px solid lightgray;
	border-bottom: 1px solid lightgray;
	border-radius: 10px;
	& > th {
		text-align: left;
	}
	@media screen and (max-width: 560px) {
		grid-template-columns: 20px 3fr 1fr 1fr;
	}
`;

export const ButtonsContainer = styled.span`
	display: flex;
	justify-content: center;
	gap: 10px;
	& > svg {
		cursor: pointer;
	}
`;

export const Colgroup = styled.colgroup`
	display: flex;
	justify-content: space-between;
`;
