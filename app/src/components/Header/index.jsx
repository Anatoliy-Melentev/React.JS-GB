import React from 'react';
import './style.sass';

export function Header({ children }) {
  return (
    <div className="header">
      <h2 className="title">{children}</h2>
    </div>
  );
}
