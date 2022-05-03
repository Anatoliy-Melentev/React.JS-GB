import React, { useState } from 'react';
import { IconButton, TextareaAutosize } from '@mui/material';
import { Save } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

export function EditMsg({ text, changeMsg, onEdit }) {
  const [newText, setNewText] = useState(text);
  const handleChange = (e) => setNewText(e.target.value);
  const handleClick = () => changeMsg(newText);

  return (
    onEdit
      ? (
        <>
          <TextareaAutosize
            maxRows={4}
            style={{ height: 40 }}
            aria-label="maximum height"
            value={newText}
            onChange={handleChange}
            size="small"
            className="textField"
          />
          <IconButton
            sx={{ width: 50, height: 50 }}
            className="deleteButton"
            onClick={handleClick}
            aria-label="upload picture"
          >
            <Save className="saveBtn" sx={{ color: grey[700] }} />
          </IconButton>
        </>
      ) : <span>{text}</span>
  );
}
