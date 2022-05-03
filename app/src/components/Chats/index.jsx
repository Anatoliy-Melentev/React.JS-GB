import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import { selectChats } from '../../store/chats/selectors';
import { ChatListItem } from '../ChatListItem';
import { AddNewChat } from '../AddNewChat';
import { generateRandomNumber } from '../../utils/generateRandomNumber';

import './style.sass';

export function Chats() {
  const chats = useSelector(selectChats);

  return (
    <section className="chatlist">
      <List>
        <AddNewChat />
        {chats && Object.values(chats).map((value, i) => (
          value && <ChatListItem key={generateRandomNumber(i)} value={value} />
        ))}
      </List>
    </section>
  );
}
