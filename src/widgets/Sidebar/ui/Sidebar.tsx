import { NavLink } from 'react-router';

import s from './Sidebar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { sidebarItems } from '@/widgets/Sidebar/consts/items';
import { useAppSelector } from '@/shared/hooks/store';
import { selectIsAuthorized } from '@/features/Authorization';

export function Sidebar() {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	if (!isAuthorized) {
		return null;
	}

	return (
		<div className={classNames(s.Sidebar, {}, [])}>
			<div className={s.links}>
				{sidebarItems.map(({ to, Icon, content }) => (
					<NavLink
						className={s.link}
						key={content}
						to={to}
					>
						<Icon />
						<p>{content}</p>
					</NavLink>
				))}
			</div>
		</div>
	);
}
