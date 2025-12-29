import { ReactNode } from 'react';

import { getMainRoute, AppRoutes, getAuthRoute } from '@/shared/configs/router';
import { MainPage } from '@/pages/MainPage';
import { AuthPage } from '@/pages/AuthPage';

export interface RouteItem {
	path: string;
	element: ReactNode;
	isAuthOnly?: boolean;
}

export const routeConfig: Record<AppRoutes, RouteItem> = {
	[AppRoutes.MAIN]: {
		path: getMainRoute(),
		element: <MainPage />,
		isAuthOnly: true,
	},
	[AppRoutes.AUTH]: {
		path: getAuthRoute(),
		element: <AuthPage />,
	},
};
