import React, { useEffect, useRef } from "react";
import { Navigate, useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk } from "../../store/chats/actions";
import { selectChats, selectMessages } from "../../store/chats/selectors";

import { MessageList } from '../MessageList';
import { Form } from '../Form';

import './style.sass';
import { AUTHORS } from "../../utils/constants";

export function Chat() {
	const
		{ chatId } = useParams(),
		messenger = useRef(),
		dispatch = useDispatch(),
		chats = useSelector(selectChats),
		messages = useSelector(selectMessages(chatId));

	const
		sendMessage = (text, author) => dispatch(addMessageWithThunk(chatId, text, author)),
		handleAddMessage = text => sendMessage(text, AUTHORS.ME);

	useEffect(() => messenger.current?.scrollIntoView(), [chats]);

	if (!chats[chatId]) {
		return <Navigate to="/chats" replace />;
	}

	return (
		<section>
			<div className="container messenger">
				<div className="full-height"></div>
				<MessageList messages={messages} />
				<div ref={messenger} />
			</div>
			<Form onSubmit={handleAddMessage} />
		</section>
	);
}
