import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from 'firebase/database';
import { initChatsTracking } from '../../store/chats/actions';
import { getChatsRefById, getMessagesRefByChatId } from '../../services/firebase';
import { AddNewChatView } from './AddNewChatView';

export function AddNewChat() {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const
    changeState = () => {
      if (edit && value.length) {
        const id = `chat${Date.now()}`;
        set(getChatsRefById(id), { id, name: value });
        set(getMessagesRefByChatId(id), { empty: true });
        setValue('');
      }
      setEdit(!edit);
    };

  useEffect(() => dispatch(initChatsTracking()), []);

  return (
    <AddNewChatView
      edit={edit}
      value={value}
      setValue={setValue}
      changeState={changeState}
    />
  );
}
