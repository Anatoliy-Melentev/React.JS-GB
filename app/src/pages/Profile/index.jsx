import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { set, onValue } from 'firebase/database';
import {
  Avatar, Button, FormControlLabel, Checkbox, ListItemText, TextField,
} from '@mui/material';
import { Save, Edit } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { selectAvatarImg } from '../../store/profile/selectors';

import { AvatarButtons } from '../../components/AvatarButtons';
import { Header } from '../../components/Header';

import './style.sass';
import {
  getUserAvatarByRef, getUserNameByRef, getUserShowNameByRef, logOut,
} from '../../services/firebase';

export function Profile({ auth }) {
  const [dbName, setDbName] = useState('EmptyName');
  const [inputName, setInputName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [dbShowName, setDbShowName] = useState(true);
  const avatar = useSelector(selectAvatarImg);
  const [dbAvatar, setDbAvatar] = useState(avatar);
  const { currentUser } = auth;

  const handleChangeName = async () => {
    if (showInput && inputName.length) {
      await set(getUserNameByRef(currentUser.uid), inputName);
    } else {
      setInputName(dbName);
    }

    setShowInput(!showInput);
  };
  const handleChangeShowName = () => set(getUserShowNameByRef(currentUser.uid), !dbShowName);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.warn(e.message);
    }
  };

  useEffect(() => {
    const unsubscribeName = onValue(
      getUserNameByRef(currentUser.uid),
      (snapshot) => setDbName(snapshot.val()),
    );
    const unsubscribeShowName = onValue(
      getUserShowNameByRef(currentUser.uid),
      (snapshot) => setDbShowName(snapshot.val()),
    );
    const unsubscribeAvatar = onValue(
      getUserAvatarByRef(currentUser.uid),
      (snapshot) => setDbAvatar(snapshot.val()),
    );

    return () => {
      unsubscribeName();
      unsubscribeShowName();
      unsubscribeAvatar();
    };
  });

  return (
    <>
      <Header>
        Profile&nbsp;
        <Button type="button" onClick={handleLogOut}>
          LOGOUT
        </Button>
      </Header>
      <section className="avatars">
        <Avatar src={dbAvatar} alt="User Avatar" sx={{ width: 250, height: 250 }} />
        <AvatarButtons />
      </section>
      <div className="nameSection">
        <div>
          {dbShowName && (
            showInput
              ? (
                <>
                  <TextField
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Введите новое имя"
                    size="small"
                    className="textField"
                  />
                  <Save onClick={handleChangeName} className="saveBtn" sx={{ color: grey[700] }} />
                </>
              )
              : (
                <Button onClick={handleChangeName} size="large">
                  <ListItemText className="userName" primary={dbName} />
                  <Edit className="editBtn" />
                </Button>
              )
          )}
        </div>
        <div>
          <FormControlLabel
            label="Показывать имя под аватаркой"
            control={
              <Checkbox checked={dbShowName} onChange={handleChangeShowName} />
            }
          />
        </div>
      </div>
    </>
  );
}
