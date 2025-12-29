import { NavLink } from 'react-router';

import s from './Sidebar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { sidebarItems } from '@/widgets/Sidebar/consts/items';

export function Sidebar() {
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
