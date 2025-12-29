import { ReactNode } from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
	children: ReactNode;
	isAuth: boolean;
}

export function ProtectedRoute({ children, isAuth }: ProtectedRouteProps) {
	if (!isAuth) {
		return (
			<Navigate
				to='/auth'
				replace
			/>
		);
	}

	return children;
}
