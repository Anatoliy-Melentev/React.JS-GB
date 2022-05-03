import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { set } from 'firebase/database';
import { IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import { initMessagesTracking } from '../../store/messages/actions';
import { getQuiz } from '../../store/quiz/actions';
import { selectQuizLoading, selectQuizQuestion, selectQuizError } from '../../store/quiz/selectors';
import { auth, getChatsLastMsgRefById, getMessageRefById } from '../../services/firebase';
import { BOTS } from '../../utils/constants';
import './styles.sass';

export function Form() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [playStatus, setPlayStatus] = useState(0);
  const quiz = useSelector(selectQuizQuestion);
  const quizError = useSelector(selectQuizError);
  const quizLoading = useSelector(selectQuizLoading);
  const { chatId } = useParams();
  const textField = useRef();

  const sendMsg = async (author, txt) => {
    const msgId = `msg-${Date.now()}`;
    await set(getMessageRefById(chatId, msgId), { id: msgId, author, text: txt });
    await set(getChatsLastMsgRefById(chatId), txt);
  };

  let timeout;
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    await sendMsg(auth.currentUser.uid, text);

    if (chatId === 'quiz') {
      if ([0, 4].includes(playStatus)) {
        clearTimeout(timeout);
        timeout = setTimeout(() => sendMsg('quiz', 'Let\'s start!'), 500);

        dispatch(getQuiz());
        setPlayStatus(1);
      }
      if (playStatus === 2) {
        const trueAnswer = quiz.answer.replace(/[^a-zA_Z ]/g, '').toLowerCase();
        const yourAnswer = text.replace(/[^a-zA_Z ]/g, '').toLowerCase();

        timeout = setTimeout(() => {
          sendMsg(
            'quiz',
            `Your answer: ${text}, `
            + `and this is the ${yourAnswer.indexOf(trueAnswer) + 1 ? 'correct' : 'wrong'} answer. `
            + ` Correct answer: ${quiz.answer}`,
          );
        }, 500);

        setPlayStatus(1);
        dispatch(getQuiz());
      }
    }
    if (chatId === 'elephant') {
      clearTimeout(timeout);
      timeout = setTimeout(() => sendMsg('elephant', BOTS.elephant.answer(text)), 500);
    }
    setText('');
    dispatch(initMessagesTracking(chatId));
  };

  useEffect(() => dispatch(initMessagesTracking(chatId)), []);
  useEffect(() => textField.current?.focus(), []);

  useEffect(() => {
    if (quiz && playStatus === 1) {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        await sendMsg('quiz', quiz.question);
      }, 1000);

      setPlayStatus(2);
    }
  }, [quiz]);

  useEffect(() => {
    if (quizError && playStatus !== 4) {
      clearTimeout(timeout);
      timeout = setTimeout(async () => {
        await sendMsg(
          'quiz',
          'Sorry i forgot all the questions, If you want to try again, write to the chat',
        );
      }, 1000);

      setPlayStatus(4);
    }
  }, [quizError]);

  return (
    <form className="form-msg container" onSubmit={handleSubmit}>
      <span className="writeText">
        {' '}
        {quizLoading && <span>The host writes a question...</span>}
      </span>
      <br />
      <TextField inputRef={textField} size="large" value={text} onChange={handleChange} />
      <IconButton sx={{ width: 50, height: 50 }} aria-label="upload picture" type="submit">
        <Send />
      </IconButton>
    </form>
  );
}
