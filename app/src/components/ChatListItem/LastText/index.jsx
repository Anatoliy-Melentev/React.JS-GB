import React from 'react';
import './style.sass';

export function LastText({ text }) {
  return <span className="text">{`${text.slice(0, 30)}...`}</span>;
}
