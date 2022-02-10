import React from "react";
import { Avatar } from '@mui/material';
import "./styles.sass";
import {useSelector} from "react-redux";

export const Message = ({ message }) => {
	const
		posClass = ['message'],
		{ showName, name, avatar } = useSelector((state) => state),
		author = message.author;

	if (message.author?.id && message.author.id === 'me') {
		posClass.push('message__right-direction');
		author.name = name;
		author.img = avatar.img;
	}

	return (
		<div className={posClass.join(' ')}>
			<div className="message__avatar">
				<Avatar src={author.img} alt={author.name} sx={{ width: 100, height: 100 }} />
				{ showName && <div className="message__author">{author.name}</div> }
			</div>
			<div className="message__text">{message.text}</div>
		</div>
	);
}