import { Outlet, Navigate } from 'react-router';

export const PublicRoute = ({ authed }) => {
	return authed ? <Navigate to="/profile" replace /> : <Outlet />;
};