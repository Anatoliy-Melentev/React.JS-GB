import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { set } from 'firebase/database';
import { auth, getUserAvatarByRef } from '../../../services/firebase';

export function AvatarBtn({ avatar: { id, img } }) {
  return (
    <IconButton key={id} onClick={() => set(getUserAvatarByRef(auth.currentUser.uid), img)} aria-label="upload picture">
      <Avatar src={img} alt={id} sx={{ width: 70, height: 70 }} variant="square" />
    </IconButton>
  );
}
