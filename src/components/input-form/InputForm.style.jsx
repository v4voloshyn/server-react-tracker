import styled from 'styled-components';

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	min-width: 200px;
	display: flex;
	flex-direction: row;
`;
InputWrapper.displayName = 'InputWrapper';

export const Title = styled.h1`
	margin-bottom: 35px;
`;
Title.displayName = 'InputWrapper';

export const Input = styled.input`
	width: 100%;
	padding: 15px;
	padding-right: 55px;
	font-size: 16px;
	border-radius: 30px;
	border: 1px solid black;
`;
Input.displayName = 'Input';
