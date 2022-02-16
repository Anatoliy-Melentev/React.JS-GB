import { AUTHORS, CHATS } from "../../utils/constants";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";
export const EDIT_MESSAGE = "CHATS::EDIT_MESSAGE";
export const DELETE_MESSAGE = "CHATS::DELETE_MESSAGE";

export const addChat = (id, name) => ({
	type: ADD_CHAT,
	payload: { id, name },
});

export const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: { id },
});

export const addMessage = (id, text, author) => ({
	type: ADD_MESSAGE,
	payload: { id, text, author },
});

export const editMessage = (idChat, idMsg, text) => ({
	type: EDIT_MESSAGE,
	payload: { idChat, idMsg, text },
});

export const deleteMessage = (idChat, idMsg) => ({
	type: DELETE_MESSAGE,
	payload:  { idChat, idMsg },
});

let timeout;

export const addMessageWithThunk = (id, text, author) => (dispatch, getState) => {
	dispatch(addMessage(id, text, author));

	const bot = AUTHORS[id in CHATS ? CHATS[id].bot : 'ELEPHANT'];
	if (author.id !== 'bot') {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			dispatch(addMessage(id, bot.answer(text), bot));
		}, 1000);
	}
};