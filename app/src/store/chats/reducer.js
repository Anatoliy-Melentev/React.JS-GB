import { ADD_CHAT, DELETE_CHAT } from "./actions";
import chats from "../../img/chats.png";

const initialState = {};

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
		default:
			return storeState;
	}
};