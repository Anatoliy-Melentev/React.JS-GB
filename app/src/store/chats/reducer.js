import { CHATS } from "../../utils/constants";
import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "./actions";
import chats from "../../img/chats.png";

const initialState = CHATS;

export const chatsReducer = (storeState = initialState, { type, payload }) => {
	switch (type) {
		case ADD_CHAT: {
			return ({
				...storeState,
				[payload.id]: {
					name: payload.name,
					id: payload.id,
					messages: [],
					emptyText: 'Это вновь добавленный чат..',
					img: chats,
				},
			})
		}
		case DELETE_CHAT: {
			const newStoreState = {...storeState};
			delete newStoreState[payload.id];
			return newStoreState;
		}
		case ADD_MESSAGE: {
			return ({
				...storeState,
				[payload.id]: {
					...storeState[payload.id],
					messages: [...storeState[payload.id].messages, {
						id: `msg-${Date.now()}`, text: payload.text, author: payload.author,
					}]
				},
			})
		}
		case EDIT_MESSAGE: {
			const
				newStoreState = {...storeState},
				idx = newStoreState[payload.idChat].messages.findIndex(msg => msg.id === payload.idMsg);
			newStoreState[payload.idChat].messages[idx].text = payload.text;
			return newStoreState;
		}
		case DELETE_MESSAGE: {
			const newStoreState = {...storeState};
			newStoreState[payload.idChat].messages = newStoreState[payload.idChat].messages
				.filter(msg => msg.id !== payload.idMsg);
			return newStoreState;
		}
		default:
			return storeState;
	}
};