import React from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

export function DelBtn({ deleteMsg }) {
  return (
    <IconButton sx={{ width: 40, height: 40 }} onClick={deleteMsg} aria-label="upload picture">
      <Delete />
    </IconButton>
  );
}
