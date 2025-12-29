import { CircleUserRound } from 'lucide-react';

import s from './Header.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { selectIsAuthorized } from '@/features/Authorization';
import { useAppSelector } from '@/shared/hooks/store';

export function Header() {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	return (
		<div className={classNames(s.Header, {}, [])}>
			<p className={s.logo}>Whisper</p>
			{isAuthorized && (
				<CircleUserRound
					className={s.dropdown}
					size={32}
				/>
			)}
		</div>
	);
}
