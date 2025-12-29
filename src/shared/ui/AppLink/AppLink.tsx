import { Link } from 'react-router';
import { LucideIcon } from 'lucide-react';

import s from './AppLink.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface AppLinkProps {
	className?: string;
	content: string;
	Icon?: LucideIcon;
	to: string;
}

export function AppLink(props: AppLinkProps) {
	const {className, content, Icon, to} = props;
	
	if(Icon) {
		return (
			<Link className={classNames(s.AppLink, {}, [className])} to={to}>
				<Icon/>
				<p>{content}</p>
			</Link>	
		)
	}
	
	return (
		<Link className={classNames(s.AppLink, {}, [className])} to={to}>
			{content}
		</Link>
	)
}