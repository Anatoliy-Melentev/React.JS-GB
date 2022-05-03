import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { onValue, set } from 'firebase/database';
import {
  ListItemButton, ListItemAvatar, Avatar, ListItemText, IconButton,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { LastText } from './LastText';
import { getChatsLastMsgRefById, getChatsRefById } from '../../services/firebase';
import { initMessagesTracking } from '../../store/messages/actions';
import { CHATS } from '../../utils/constants';
import './style.sass';

export function ChatListItem({
  value: {
    id, name, img, emptyText,
  },
}) {
  const dispatch = useDispatch();
  const [lastMsg, setLastMsg] = useState('Здесь пока ни кто ничего не писал');
  const handleDelete = () => set(getChatsRefById(id), null);

  useEffect(() => dispatch(initMessagesTracking(id)), []);

  useEffect(() => onValue(getChatsLastMsgRefById(id), (snapshot) => setLastMsg(snapshot.val())));

  let image = img;
  if (['quiz', 'elephant'].includes(id)) {
    image = CHATS[id].img;
  }

  return (
    <ListItemButton className="listitem" key={id}>
      <NavLink className="linkitem" to={`/chats/${id}`}>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText
          className="text"
          primary={name}
          secondary={(lastMsg && <LastText text={lastMsg} />) || emptyText}
        />
      </NavLink>
      {
        !['quiz', 'elephant'].includes(id)
        && (
          <IconButton sx={{ width: 40, height: 40 }} className="deleteButton" onClick={handleDelete}>
            <Delete />
          </IconButton>
        )
      }
    </ListItemButton>
  );
}
