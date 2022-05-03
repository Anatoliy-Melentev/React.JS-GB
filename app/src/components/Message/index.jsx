import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { set, onValue } from 'firebase/database';
import { EditMsg } from './EditMsg';
import { EditBtn } from './EditBtn';
import { DelBtn } from './DelBtn';
import {
  auth,
  getUserShowNameByRef,
  getMessageRefById,
  getMessageTextRefById,
  getUserAvatarByRef,
  getUserNameByRef,
} from '../../services/firebase';
import { initMessagesTracking } from '../../store/messages/actions';
import { BOTS } from '../../utils/constants';
import './styles.sass';

export function Message({ doScroll, message: { id, author, text } }) {
  const { chatId } = useParams();
  const [onEdit, setOnEdit] = useState(false);
  const [showName, setShowName] = useState(true);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const posClass = ['message'];
  const dispatch = useDispatch();

  const
    handleChangeMsg = async (txt) => {
      if (!txt) {
        await set(getMessageRefById(chatId, id), null);
      } else {
        setOnEdit(!onEdit);
        await set(getMessageTextRefById(chatId, id), txt);
      }
    };

  if (auth.currentUser.uid === author) {
    posClass.push('message__right-direction');
  }

  useEffect(() => {
    if (!(author in BOTS)) {
      const unsubscribeName = onValue(
        getUserNameByRef(author),
        (snapshot) => setName(snapshot.val()),
      );
      const unsubscribeAvatar = onValue(
        getUserAvatarByRef(author),
        (snapshot) => setImg(snapshot.val()),
      );
      const unsubscribeShowName = onValue(
        getUserShowNameByRef(author),
        (snapshot) => setShowName(snapshot.val()),
      );

      return () => {
        unsubscribeName();
        unsubscribeAvatar();
        unsubscribeShowName();
      };
    }
    setName(BOTS[author].name);
    setImg(BOTS[author].img);

    return true;
  }, [showName, name, img]);

  useEffect(() => dispatch(initMessagesTracking(chatId)), []);
  useEffect(() => doScroll(), [chatId]);

  return (
    <div className={posClass.join(' ')}>
      <div className="message__avatar">
        <Avatar src={img} alt={name} sx={{ width: 100, height: 100 }} />
        {showName && <div className="message__author">{name}</div>}
      </div>
      <div className="message__text">
        <EditMsg onEdit={onEdit} text={text} changeMsg={handleChangeMsg} />
      </div>
      <div className="editAction">
        <DelBtn deleteMsg={() => handleChangeMsg()} />
        <EditBtn className="editButton" onEdit={onEdit} changeOnEdit={() => setOnEdit(!onEdit)} />
      </div>
    </div>
  );
}
