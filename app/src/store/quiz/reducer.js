import { FETCH_STATUSES } from '../../utils/apiConstants';
import { GET_QUIZ_FAILURE, GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS } from './actions';

const initialState = {
  data: [],
  error: null,
  status: FETCH_STATUSES.IDLE,
};

export const quizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUIZ_REQUEST: {
      return {
        ...state,
        error: null,
        status: FETCH_STATUSES.REQUEST,
      };
    }
    case GET_QUIZ_SUCCESS: {
      return {
        ...state,
        data: payload,
        status: FETCH_STATUSES.SUCCESS,
      };
    }
    case GET_QUIZ_FAILURE: {
      return {
        ...state,
        error: payload,
        status: FETCH_STATUSES.FAILURE,
      };
    }
    default:
      return state;
  }
};
