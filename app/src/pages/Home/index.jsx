import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar, ListItemIcon, MenuItem, Typography,
} from '@mui/material';
import { MAINMENU } from '../../utils/constants';
import { Header } from '../../components/Header';
import { AuthForm } from '../../components/AuthForm';
import { generateRandomNumber } from '../../utils/generateRandomNumber';

export function Home({ authed, isSignUp }) {
  return (
    <>
      <Header>{isSignUp ? 'Пожалуйста зарегистрируйтесь' : 'Пожалуйста авторизуйтесь'}</Header>

      {authed
      && MAINMENU.filter((menu) => menu.name !== 'home').map(({ text, icon, path }, i) => (
        <Link key={generateRandomNumber(i)} to={path}>
          <MenuItem>
            <ListItemIcon>
              <Avatar src={icon} alt={text} sx={{ width: 50, height: 50 }} variant="square" />
            </ListItemIcon>
            <Typography sx={{ marginLeft: 10 }} variant="inherit">{text}</Typography>
          </MenuItem>
        </Link>
      ))}
      <Link to={`${isSignUp ? '/' : '/signup'}`}>{isSignUp ? 'К авторизации' : 'К регистрации'}</Link>
      <AuthForm isSignUp={isSignUp} />
    </>
  );
}
