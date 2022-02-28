import React, { useEffect, useRef } from "react";
import { Navigate, useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { initMessagesTracking } from "../../store/messages/actions";
import { selectChats } from "../../store/chats/selectors";

import { MessageList } from '../MessageList';
import { Form } from '../Form';

import './style.sass';
import { selectMessages } from "../../store/messages/selectors";

export function Chat() {
	const
		{ chatId } = useParams(),
		messenger = useRef(),
		dispatch = useDispatch(),
		chats = useSelector(selectChats),
		messages = useSelector(selectMessages(chatId)),
		doScroll = () => messenger.current?.scrollIntoView();

	useEffect(() => dispatch(initMessagesTracking(chatId)), []);
	// useEffect(() => {
	// 		onValue(getMessagesRefByChatId(chatId), snapshot => {
	// 			if (!snapshot.val()?.empty) {
	// 				setMessages(null);
	// 			}
	// 		})
	// 	}
	// , []);

	if (!chats/*[chatId]*/) {
		return <Navigate to="/chats" replace />;
	}

	return (
		<section>
			<div className="container messenger">
				<div className="full-height"></div>
				<MessageList doScroll={doScroll} messages={messages} />
				<div ref={messenger} />
			</div>
			<Form />
		</section>
	);
}
