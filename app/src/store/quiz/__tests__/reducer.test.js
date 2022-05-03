import { quizReducer } from '../reducer';
import { GET_QUIZ_REQUEST, GET_QUIZ_SUCCESS, GET_QUIZ_FAILURE } from '../actions';
import { FETCH_STATUSES } from '../../../utils/apiConstants';

describe('quizReducer tests', () => {
  it('returns obj with change status REQUEST and actions', () => {
    const
      initialState = { data: [], error: null, status: FETCH_STATUSES.IDLE };
    const actions = { type: GET_QUIZ_REQUEST, payload: [] };
    const changeState = { data: [], error: null, status: FETCH_STATUSES.REQUEST };

    const received = quizReducer(initialState, actions);
    expect(changeState).toEqual(received);
  });
  it('returns obj with change status SUCCESS and actions', () => {
    const
      initialState = { data: [], error: null, status: FETCH_STATUSES.IDLE };
    const actions = { type: GET_QUIZ_SUCCESS, payload: [] };
    const changeState = { data: [], error: null, status: FETCH_STATUSES.SUCCESS };

    const received = quizReducer(initialState, actions);
    expect(changeState).toEqual(received);
  });
  it('returns obj with change status FAILURE and actions', () => {
    const
      initialState = { data: [], error: null, status: FETCH_STATUSES.IDLE };
    const actions = { type: GET_QUIZ_FAILURE, payload: [] };
    const changeState = { data: [], error: [], status: FETCH_STATUSES.FAILURE };

    const received = quizReducer(initialState, actions);
    expect(changeState).toEqual(received);
  });
});
