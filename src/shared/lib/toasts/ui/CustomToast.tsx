import { LucideIcon, CircleCheck, CircleAlert, CircleX, Info } from 'lucide-react';

import { ToastType } from '../config/config';

import s from './CustomToast.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface CustomToastProps {
	message: string;
	type: ToastType;
}

const mapTypeToIcon: Record<ToastType, LucideIcon> = {
	success: CircleCheck,
	warning: CircleAlert,
	error: CircleX,
	info: Info,
};

export function CustomToast({ message, type }: CustomToastProps) {
	const Icon = mapTypeToIcon[type];

	return (
		<div className={s.toast}>
			<Icon
				className={classNames(s.icon, {}, [s[type]])}
				size={24}
			/>
			<p>{message}</p>
		</div>
	);
}
