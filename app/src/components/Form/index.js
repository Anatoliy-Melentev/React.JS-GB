import { AUTHORS } from "../../utils/constants";
import { IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useState, useRef, useEffect } from "react";

import "./styles.sass";

export const Form = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const textField = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!value) {
			return;
		}

		onSubmit(value, AUTHORS.ME);
		setValue('');
	};

	useEffect(() => {
		textField.current?.focus();
	}, [])

	return (
		<form className="form-msg container" onSubmit={handleSubmit}>
			<TextField inputRef={textField} size="large" value={value} onChange={handleChange} />
			<IconButton onClick={handleSubmit} aria-label="upload picture" component="submit"><Send /></IconButton>
		</form>
	);
};