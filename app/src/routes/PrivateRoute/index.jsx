import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export function PrivateRoute({ authed }) {
  return authed ? <Outlet /> : <Navigate to="/" replace />;
}
