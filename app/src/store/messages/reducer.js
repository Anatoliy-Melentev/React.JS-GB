import { ADD_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialState = {};

export const msgsReducer = (storeState = initialState, { type, payload }) => {
	switch (type) {
		case ADD_MESSAGE: {
			return ({
				...storeState,
				[payload.idChat]: {
					...storeState[payload.idChat],
					[payload.idMsg]: {
						id: payload.idMsg, text: payload.text, author: payload.author,
					}
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
			const newStoreState = {...storeState};debugger;
			delete newStoreState[payload.idChat][payload.idMsg];
			return newStoreState;
		}
		default:
			return storeState;
	}
};