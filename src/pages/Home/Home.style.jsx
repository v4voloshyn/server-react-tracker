import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100vw;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const FormWrapper = styled.div`
	display: flex;
	width: 560px;
	flex-direction: column;
	align-items: center;
	@media screen and (max-width: 560px) {
		max-width: 90vw;
	}
`;
