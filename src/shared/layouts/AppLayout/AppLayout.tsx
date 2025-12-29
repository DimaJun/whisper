import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { useAppSelector } from '@/shared/hooks/store';
import { selectIsAuthorized } from '@/features/Authorization';

export function AppLayout() {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	const mods: Mods = {
		auth: isAuthorized,
	};

	return (
		<div className={classNames('app', mods, [])}>
			<Header />
			<Sidebar />
			<div className='content'>
				<AppRouter />
			</div>
		</div>
	);
}
