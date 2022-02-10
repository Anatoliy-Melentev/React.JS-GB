import { CHANGE_NAME, CHANGE_SHOW_NAME, CHANGE_AVATAR } from "./actions";
import { AVATARS } from "../../utils/constants";

const initialState = {
	name: "Я",
	avatar: AVATARS.avatar1,
	showName: true,
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SHOW_NAME: {
			return {
				...state,
				showName: !state.showName,
			};
		}
		case CHANGE_NAME: {
			return {
				...state,
				name: action.payload,
			};
		}
		case CHANGE_AVATAR: {
			return {
				...state,
				avatar: AVATARS[action.payload],
			};
		}
		default:
			return state;
	}
};