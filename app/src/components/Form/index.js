import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router';
import { addMessageWithThunk } from "../../store/chats/actions";

import { AUTHORS } from "../../utils/constants";
import { IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

import "./styles.sass";

export const Form = ({ onSubmit }) => {
	const
		dispatch = useDispatch(),
		[text, setText] = useState(''),
		{ chatId } = useParams(),
		textField = useRef();

	const
		handleChange = (e) => setText(e.target.value),
		handleSubmit = (e) => {
			e.preventDefault();
			if (!text) return;

			dispatch(addMessageWithThunk(chatId, text, AUTHORS.ME));
			setText('');
		};

	useEffect(() => textField.current?.focus(), [])

	return (
		<form className="form-msg container" onSubmit={handleSubmit}>
			<TextField inputRef={textField} size="large" value={text} onChange={handleChange} />
			<IconButton sx={{ width: 50, height: 50 }} aria-label="upload picture" type="submit">
				<Send />
			</IconButton>
		</form>
	);
};