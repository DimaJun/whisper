import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

export function App() {
	return (
		<div className='app'>
			<Header />
			<Sidebar />
			<div className='content'></div>
		</div>
	);
}
