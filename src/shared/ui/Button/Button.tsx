import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

import s from './Button.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	Icon?: LucideIcon;
	children?: ReactNode;
}

export function Button(props: ButtonProps) {
	const { className, Icon, onClick, children, ...rest } = props;

	return (
		<button
			className={classNames(s.Button, {}, [className])}
			onClick={onClick}
			{...rest}
		>
			{Icon && <Icon className={s.icon} />}
			{children && <p className={s.content}>{children}</p>}
		</button>
	);
}
