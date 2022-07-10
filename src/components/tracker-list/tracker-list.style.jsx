import styled from 'styled-components';

export const Table = styled.table`
	margin-top: 20px;
	width: 100%;
	min-width: 250px;
`;

export const TBody = styled.tbody`
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
	font-size: 14px;
	transition: all 0.3s ease-in;
	background-color: ${({ isPause }) =>
		isPause ? 'rgba(30, 239, 44, 0.5)' : 'lightyellow'};
	border: 1px solid lightgray;
	border-radius: 10px;
	& > th {
		text-align: left;
		height: 100%;
		display: flex;
		font-size: 16px;
		align-items: center;
		& > svg {
			fill: tomato;
			cursor: pointer;
			transition: all 0.3s ease-in-out;
		}
		& > svg:hover {
			fill: coral;
		}
	}
	@media screen and (max-width: 560px) {
		grid-template-columns: 20px 1fr 50px 60px;
		padding: 0 5px;
		& > th {
			font-size: 14px;
		}
		& > td {
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
`;

export const Colgroup = styled.colgroup`
	display: flex;
	justify-content: space-between;
`;
