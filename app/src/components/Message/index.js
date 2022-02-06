import React from "react";
import { Avatar } from '@mui/material';
import "./styles.sass";

export class Message extends React.Component {
	render() {
		const { message } = this.props;
		const posClass = ['message'];

		if (message.author?.id && message.author.id === 'me')
			posClass.push('message__right-direction');

		return (
			<div className={posClass.join(' ')}>
				<div className="message__avatar">
					<Avatar src={message.author.img} alt={message.author.name} sx={{ width: 100, height: 100 }} />
					<div className="message__author">{message.author.name}</div>
				</div>
				<div className="message__text"> {message.text}</div>
			</div>
		);
	}
}