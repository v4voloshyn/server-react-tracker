import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100vw;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;
Container.displayName = 'Container';

export const FormWrapper = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
	width: 560px;
	flex-direction: column;
	flex: 1 1 auto;
	align-items: center;
	@media screen and (max-width: 560px) {
		max-width: 90vw;
	}
`;
FormWrapper.displayName = 'FormWrapper';
