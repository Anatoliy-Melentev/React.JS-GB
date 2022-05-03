import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar, ListItemIcon, MenuItem, MenuList,
} from '@mui/material';
import { MAINMENU } from '../../utils/constants';
import { generateRandomNumber } from '../../utils/generateRandomNumber';
import './style.sass';

export function MainMenu() {
  return (
    <MenuList className="mainmenu">
      {
        MAINMENU.map(({ text, icon, path }, i) => (
          <Link key={generateRandomNumber(i)} to={path}>
            <MenuItem>
              <ListItemIcon>
                <Avatar src={icon} alt={text} sx={{ width: 30, height: 30 }} variant="square" />
              </ListItemIcon>
            </MenuItem>
          </Link>
        ))
      }
    </MenuList>
  );
}
