export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: id,
});

export const addChat = (id, name) => ({
	type: ADD_CHAT,
	payload: { id, name },
});

export const addMessage = (id, text, author) => ({
	type: ADD_MESSAGE,
	payload: { id, text, author },
});