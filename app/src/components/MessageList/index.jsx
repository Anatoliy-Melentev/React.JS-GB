import React from 'react';
import { Message } from '../Message';

export const MessageList = ({ doScroll, messages = {} }) => messages && Object.values(messages)
  .map((message) => <Message key={message.id} doScroll={doScroll} message={message} />);
