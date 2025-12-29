import { Route, Routes } from 'react-router';

import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { ProtectedRoute } from '@/app/providers/router/ui/ProtectedRoute';
import { useAppSelector } from '@/shared/hooks/store';
import { selectIsAuthorized } from '@/features/Authorization';

export function AppRouter() {
	const isAuth = useAppSelector(selectIsAuthorized);

	return (
		<Routes>
			{Object.values(routeConfig).map(({ path, element, isAuthOnly }) => (
				<Route
					key={path}
					path={path}
					element={
						isAuthOnly ? (
							<ProtectedRoute isAuth={isAuth}>{element}</ProtectedRoute>
						) : (
							element
						)
					}
				/>
			))}
		</Routes>
	);
}
