import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Avatar } from '@mui/material';
import { selectName, selectShowName, selectAvatarImg } from "../../store/profile/selectors";

import "./styles.sass";

export const Message = ({ message: { author, text }}) => {
	const
		posClass = ['message'],
		showName = useSelector(selectShowName, shallowEqual);

	if (author.id && author.id === 'me') {
		posClass.push('message__right-direction');
		author.name = useSelector(selectName);
		author.img = useSelector(selectAvatarImg);
	}

	return (
		<div className={posClass.join(' ')}>
			<div className="message__avatar">
				<Avatar src={author.img} alt={author.name} sx={{ width: 100, height: 100 }} />
				{ showName && <div className="message__author">{author.name}</div> }
			</div>
			<div className="message__text">{text}</div>
		</div>
	);
}