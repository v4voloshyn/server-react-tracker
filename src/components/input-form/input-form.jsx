import { Input, InputWrapper, PlayIcon, Title } from './input-form.style';

import React from 'react';

const InputForm = () => {
	return (
		<>
			<Title>tracker</Title>

			<InputWrapper>
				<Input type='text' placeholder='Enter tracker name' />
				<PlayIcon size={'3.25rem'} />
			</InputWrapper>
		</>
	);
};

export default InputForm;
