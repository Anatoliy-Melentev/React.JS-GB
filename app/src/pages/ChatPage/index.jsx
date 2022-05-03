import React from 'react';
import { Outlet } from 'react-router-dom';
import { Chats } from '../../components/Chats';
import './style.sass';

export function ChatPage() {
  return (
    <section className="chats">
      <Chats />
      <Outlet />
    </section>
  );
}
