import React, { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initMessagesTracking } from '../../store/messages/actions';
import { selectChats } from '../../store/chats/selectors';
import { selectMessages } from '../../store/messages/selectors';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import './style.sass';

export function Chat() {
  const { chatId } = useParams();
  const messenger = useRef();
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const messages = useSelector(selectMessages(chatId));
  const doScroll = () => messenger.current?.scrollIntoView();

  useEffect(() => dispatch(initMessagesTracking(chatId)), []);

  if (!chats) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <section>
      <div className="container messenger">
        <div className="full-height" />
        <MessageList doScroll={doScroll} messages={messages} />
        <div ref={messenger} />
      </div>
      <Form />
    </section>
  );
}
