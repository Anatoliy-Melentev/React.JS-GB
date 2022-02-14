import { CHATS } from "../../utils/constants";
import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from "./actions";
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
			const newStoreState = Object.assign({}, storeState);
			delete newStoreState[payload];
			return newStoreState;
		}
		case ADD_MESSAGE: {
			debugger;
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
		default:
			return storeState;
	}
};