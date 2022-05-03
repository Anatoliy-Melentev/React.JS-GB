import { FETCH_STATUSES } from '../../utils/apiConstants';

export const selectQuizQuestion = ({ quiz }) => quiz.data[0];
export const selectQuizLoading = ({ quiz }) => quiz.status === FETCH_STATUSES.REQUEST;
export const selectQuizError = ({ quiz }) => quiz.error;
