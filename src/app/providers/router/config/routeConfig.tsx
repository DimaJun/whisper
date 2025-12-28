import { ReactNode } from 'react';

import { getMainRoute, AppRoutes, getAuthRoute } from '@/shared/configs/router';
import { MainPage } from '@/pages/MainPage';
import { AuthPage } from '@/pages/AuthPage';

export interface RouteItem {
	path: string;
	element: ReactNode;
}

export const routeConfig: Record<AppRoutes, RouteItem> = {
	[AppRoutes.MAIN]: {
		path: getMainRoute(),
		element: <MainPage />,
	},
	[AppRoutes.AUTH]: {
		path: getAuthRoute(),
		element: <AuthPage />,
	},
};
