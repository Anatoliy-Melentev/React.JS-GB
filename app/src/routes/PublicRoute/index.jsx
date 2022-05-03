import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export function PublicRoute({ authed }) {
  return authed ? <Navigate to="/profile" replace /> : <Outlet />;
}
