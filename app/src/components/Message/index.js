import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Avatar } from '@mui/material';
import { selectName, selectShowName, selectAvatarImg } from "../../store/profile/selectors";
import { deleteMessage, editMessage } from "../../store/chats/actions";
import { useParams } from "react-router";
import { EditMsg } from "./EditMsg";
import { EditBtn } from "./EditBtn";
import { DelBtn } from "./DelBtn";

import "./styles.sass";

export const Message = ({ message: { id, author, text }}) => {
	const
		[ onEdit, setOnEdit ] = useState(false),
		posClass = ['message'],
		dispatch = useDispatch(),
		{ chatId } = useParams(),
		showName = useSelector(selectShowName, shallowEqual),
		name = useSelector(selectName),
		img = useSelector(selectAvatarImg);

	const
		handleChangeMsg = (text) => {
			if (!text) {
				dispatch(deleteMessage(chatId, id))
			} else {
				setOnEdit(!onEdit);
				dispatch(editMessage(chatId, id, text));
			}
		};

	if (author.id && author.id === 'me') {
		posClass.push('message__right-direction');
		author.name = name;
		author.img = img;
	}

	return (
		<div className={posClass.join(' ')}>
			<div className="message__avatar">
				<Avatar src={author.img} alt={author.name} sx={{ width: 100, height: 100 }} />
				{ showName && <div className="message__author">{author.name}</div> }
			</div>
			<div className="message__text">
				<EditMsg onEdit={onEdit} text={text} changeMsg={handleChangeMsg} />
			</div>
			<div className="editAction">
				<DelBtn deleteMsg={() => dispatch(deleteMessage(chatId, id))} />
				<EditBtn className="editButton" onEdit={onEdit} changeOnEdit={() => setOnEdit(!onEdit)} />
			</div>
		</div>
	);
}