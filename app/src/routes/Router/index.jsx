import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { MainMenu } from '../../components/MainMenu';
import { Home } from '../../pages/Home';
import { ChatPage } from '../../pages/ChatPage';
import { Chat } from '../../components/Chat';
import { Profile } from '../../pages/Profile';
import './style.sass';
import { PublicRoute } from '../PublicRoute';
import { PrivateRoute } from '../PrivateRoute';
import { auth } from '../../services/firebase';

const theme = createTheme({ palette: { primary: { main: grey[400] } } });

export function Router() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => onAuthStateChanged(auth, (user) => setAuthed(user)));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="page">
          <div className="mainmenu">
            <MainMenu />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<PublicRoute authed={authed} />}>
                <Route path="" element={<Home auth={authed} />} />
                <Route path="/signup" element={<Home auth={authed} isSignUp />} />
              </Route>
              <Route path="/" element={<PrivateRoute authed={authed} />}>
                <Route
                  path="profile"
                  element={
                    <Profile auth={auth} changeAuth={() => setAuthed(!authed)} />
                  }
                />
                <Route path="chats" element={<ChatPage />}>
                  <Route path=":chatId" element={<Chat />} />
                </Route>
              </Route>
              <Route element={<h2>404</h2>} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}
