import { quizUrl } from "../../utils/apiConstants";

export const GET_QUIZ_REQUEST = "QUIZ::GET_QUIZ_REQUEST";
export const GET_QUIZ_SUCCESS = "QUIZ::GET_QUIZ_SUCCESS";
export const GET_QUIZ_FAILURE = "QUIZ::GET_QUIZ_FAILURE";

export const getQuizRequest = () => ({
	type: GET_QUIZ_REQUEST,
});

export const getQuizSuccess = (quiz) => ({
	type: GET_QUIZ_SUCCESS,
	payload: quiz,
});

export const getQuizFailure = (error) => ({
	type: GET_QUIZ_FAILURE,
	payload: error,
});

export const getQuiz = () => async (dispatch) => {
	dispatch(getQuizRequest());

	try {
		const response = await fetch(quizUrl);
		if (!response.ok) {
			throw new Error(response.status);
		}

		const result = await response.json();
		dispatch(getQuizSuccess(result));
	} catch (err) {
		dispatch(getQuizFailure(err));
		//console.warn(err);
	}
	return Promise.resolve();
};