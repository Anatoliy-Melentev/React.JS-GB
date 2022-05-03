import React from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

export function EditBtn({ onEdit, changeOnEdit }) {
  return !onEdit
  && (
  <IconButton
    sx={{ width: 40, height: 40 }}
    onClick={changeOnEdit}
    aria-label="upload picture"
  >
    <Edit />
  </IconButton>
  );
}
