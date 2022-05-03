import { CHANGE_NAME, CHANGE_SHOW_NAME, CHANGE_AVATAR } from './actions';
import { AVATARS } from '../../utils/constants';

const initialState = {
  name: 'Я',
  avatar: AVATARS.avatar1,
  showName: true,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SHOW_NAME: {
      return {
        ...state,
        showName: action.showName,
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case CHANGE_AVATAR: {
      return {
        ...state,
        avatar: AVATARS[action.id],
      };
    }
    default:
      return state;
  }
};
