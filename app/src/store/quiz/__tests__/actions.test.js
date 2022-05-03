import {
  getQuiz,
  getQuizFailure,
  getQuizRequest,
  getQuizSuccess,
  GET_QUIZ_SUCCESS,
} from '../actions';

require('jest-fetch-mock').enableMocks();

describe('getQuizSuccess tests', () => {
  it('returns obj with type and payload', () => {
    const payload = [];
    const expected = {
      type: GET_QUIZ_SUCCESS,
      payload,
    };

    const received = getQuizSuccess(payload);
    expect(expected).toEqual(received);
  });
});

describe('getQuizTest', () => {
  it('calls fn passed as an arg with getQuizReq', () => {
    const mockDispatch = jest.fn();

    getQuiz()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(getQuizRequest());
  });

  it('calls fn passed as an arg with getQuizSuccess if fetch was successful', async () => {
    const mockDispatch = jest.fn();
    const result = ['test'];
    // eslint-disable-next-line no-undef
    fetchMock.mockResponseOnce(JSON.stringify(result));

    await getQuiz()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getQuizSuccess(result));
  });

  it('calls fn passed as an arg with getQuizFailure if fetch was unsuccessful', async () => {
    const mockDispatch = jest.fn();
    const error = new Error('some fetch error');
    // eslint-disable-next-line no-undef
    fetchMock.mockRejectOnce(error);

    await getQuiz()(mockDispatch);

    expect(mockDispatch).toHaveBeenLastCalledWith(getQuizFailure(error));
  });
});
