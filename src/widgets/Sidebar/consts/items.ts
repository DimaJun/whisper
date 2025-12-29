import { House } from 'lucide-react';

import { getMainRoute } from '@/shared/configs/router';

export const sidebarItems = [
	{
		content: 'Главная',
		Icon: House,
		to: getMainRoute(),
	},
];
