import React, { useEffect, useRef } from "react";
import { Navigate, useParams } from 'react-router';
import { MessageList } from '../MessageList';
import { Form } from '../Form';

import './style.sass';
import { AUTHORS } from "../../utils/constants";

export function Chat({chats, setChats}) {
	const params = useParams();
	const { chatId } = params;
	const messenger = useRef();

	const handleAddMessage = text => sendMessage(text, AUTHORS.ME);

	const sendMessage = (text, author) => {
		setChats((prev) => {
			return ({
				...prev,
				[chatId]: {
					...prev[chatId],
					messages: [...prev[chatId].messages, {
						text,
						author,
						id: `msg-${Date.now()}`,
					}]
				},
			})
		});
	};

	useEffect(() => {
		messenger.current?.scrollIntoView();

		if (chats[chatId]) {
			let timeout
			const messages = chats[chatId].messages;
			if (messages.length && messages[messages.length - 1].author.id !== 'bot') {
				setTimeout(() => {
					sendMessage(
						`Все говорят "${messages[messages.length - 1].text}", а ты купи слона!`,
						AUTHORS.BOT,
					)
				}, 1000)
			}

			return () => clearTimeout(timeout);
		}
	}, [chats]);

	if (!chats[chatId]) {
		return <Navigate to="/chats" replace />;
	}

	return (
		<section>
			<div className="container messenger">
				<div className="full-height"></div>
				<MessageList messages={chats[chatId].messages} />
				<div ref={messenger} />
			</div>
			<Form onSubmit={handleAddMessage} />
		</section>
	);
}
