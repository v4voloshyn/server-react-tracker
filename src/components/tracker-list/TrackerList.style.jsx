import styled from 'styled-components';

const handleThemeColor = (isPaused, theme) => {
	switch (theme) {
		case 'dark':
			if (isPaused) return 'darkslategrey';
			if (!isPaused) return 'rgba(30, 239, 44, 0.5)';
			break;
		case 'light':
			if (!isPaused) return 'rgba(30, 239, 44, 0.5)';
			if (isPaused) return 'lightyellow';
			break;
		default:
			return 'inherit';
	}
};

export const Table = styled.table`
	margin-top: 20px;
	width: 100%;
	min-width: 250px;
`;
Table.displayName = 'Table';

export const TBody = styled.tbody`
	@media screen and (max-width: 560px) {
		& > tr {
			font-size: 12px;
		}
	}
`;
TBody.displayName = 'TBody';

export const TRow = styled.tr`
	display: grid;
	padding: 0 10px;
	margin-top: 4px;
	height: 40px;
	grid-template-columns: 30px 3fr 1fr 1fr;
	align-items: center;
	font-size: 14px;
	transition: all 0.3s ease-in;
	background-color: ${({ isPause, theme }) => handleThemeColor(isPause, theme)};
	border: 1px solid lightgray;
	border-radius: 10px;
	& > td {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
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
		grid-template-columns: 20px 1fr 60px 60px;
		padding: 0 5px;
		& > th {
			font-size: 14px;
		}
	}
`;
TRow.displayName = 'TRow';

export const Colgroup = styled.colgroup`
	display: flex;
	justify-content: space-between;
`;
Colgroup.displayName = 'ColGroup';
