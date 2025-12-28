import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';

export function AppLayout() {
	return (
		<div className='app'>
			<Header />
			<Sidebar />
			<div className='content'>
				<AppRouter />
			</div>
		</div>
	);
}
