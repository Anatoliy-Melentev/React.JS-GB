import React from 'react';
import { AVATARS } from '../../utils/constants';
import { AvatarBtn } from './AvatarBtn';
import './style.sass';

export function AvatarButtons() {
  return (
    <div className="change-avatar">
      {Object.values(AVATARS).map((avatar) => <AvatarBtn key={avatar.id} avatar={avatar} />)}
    </div>
  );
}
