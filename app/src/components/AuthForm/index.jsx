import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import { Send } from '@mui/icons-material';
import { logIn, signUp } from '../../services/firebase';

export function AuthForm({ isSignUp }) {
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      await signUp(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await logIn(email, pass);
    } catch (e) {
      setError(e.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pass || !email) return;

    await [handleSignUp, handleSignIn][isSignUp ? 0 : 1]();

    setEmail('');
    setPass('');
  };

  return (
    <form className="form-msg container" onSubmit={handleSubmit}>
      <TextField size="small" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <TextField size="small" placeholder="Name" value={pass} onChange={(e) => setPass(e.target.value)} />
      <IconButton sx={{ width: 50, height: 50 }} aria-label="upload picture" type="submit">
        <Send />
      </IconButton>
      {error && <span>{error}</span>}
    </form>
  );
}
