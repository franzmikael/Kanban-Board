import React from 'react';
import propTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function CustomForm({formData, defaultValue}) {
	return (
		<>
		{formData.map((input) => {
			let value;
			if (typeof defaultValue !== 'undefined') {
				value = defaultValue[input.name];
			}
			let props = {type: input.type, name: input.name, style: input.style};

			return(
				<Form.Group key={input.name}>
					<Form.Label>{input.label}</Form.Label>
					<Form.Control {...props} placeholder={input.placeholder} defaultValue={value} onChange={input.onChange}/>
				</Form.Group>
			)
		})}
		</>
	)
}

CustomForm.propTypes = {
    formData: propTypes.array,
    defaultValue: propTypes.object
}