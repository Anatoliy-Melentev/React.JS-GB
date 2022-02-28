import { useState, useRef, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router';
import {addMessage, addMessageWithThunk} from "../../store/chats/actions";
import {getQuiz} from "../../store/quiz/actions";
import {selectQuizLoading, selectQuizQuestion,selectQuizError} from "../../store/quiz/selectors";

import { AUTHORS } from "../../utils/constants";
import { IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';

import "./styles.sass";

export const Form = ({ onSubmit }) => {
	const
		dispatch = useDispatch(),
		[text, setText] = useState(''),
		[playStatus, setPlayStatus] = useState(0),
		quiz = useSelector(selectQuizQuestion),
		quizError = useSelector(selectQuizError),
		quizLoading = useSelector(selectQuizLoading),
		{ chatId } = useParams(),
		textField = useRef();

	let timeout;
	const
		handleChange = (e) => setText(e.target.value),
		handleSubmit = (e) => {
			e.preventDefault();
			if (!text) return;

			dispatch(addMessageWithThunk(chatId, text, AUTHORS.ME, playStatus));

			if (chatId === 'quiz') {
				if ([0, 4].includes(playStatus)) {
					clearTimeout(timeout);
					timeout = setTimeout(() => {
						dispatch(addMessage('quiz', `So, Let's start!`, AUTHORS.QUIZ));
					}, 500);

					dispatch(getQuiz());
					setPlayStatus(1);
				}
				if (playStatus === 2) {
					const trueAnswer = quiz.answer.replace(/[^a-zA_Z ]/g,"").toLowerCase();
					const yourAnswer = text.replace(/[^a-zA_Z ]/g,"").toLowerCase();

					timeout = setTimeout(() => {
						dispatch(addMessageWithThunk(
							'quiz',
							`Your answer: ${text}, ` +
							`and this is the ${yourAnswer.indexOf(trueAnswer) + 1 ? 'correct' : 'wrong'} answer ` +
							` Correct answer: ${quiz.answer}`,
							AUTHORS.QUIZ
						));
					}, 500);

					setPlayStatus(1);
					dispatch(getQuiz());
				}
			}
			setText('');
		};

	useEffect(() => textField.current?.focus(), []);

	useEffect(() => {
		if (quiz && playStatus === 1) {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				dispatch(addMessageWithThunk('quiz', quiz.question, AUTHORS.QUIZ));
			}, 1000);

			setPlayStatus(2);
		}
	}, [quiz])


	useEffect(() => {
		if (quizError && playStatus !== 4) {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				dispatch(addMessageWithThunk(
					'quiz',
					'Sorry i forgot all the questions, If you want to try again, write to the chat',
					AUTHORS.QUIZ
				));
			}, 1000);

			setPlayStatus(4);
		}
	}, [quizError])
	return (
		<>
			<form className="form-msg container" onSubmit={handleSubmit}>
				<span className="writeText"> {quizLoading && <>The host comes up with a new question...</>}</span>
				<br />
				<TextField inputRef={textField} size="large" value={text} onChange={handleChange} />
				<IconButton sx={{ width: 50, height: 50 }} aria-label="upload picture" type="submit">
					<Send />
				</IconButton>
			</form>
		</>
	);
};