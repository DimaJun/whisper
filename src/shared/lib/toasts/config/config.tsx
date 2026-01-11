import toast from 'react-hot-toast';

import { CustomToast } from '../ui/CustomToast';

export type ToastType = 'success' | 'warning' | 'error' | 'info';

export const showToast = {
	success: (msg: string) =>
		toast.custom(
			<CustomToast
				message={msg}
				type='success'
			/>,
			{ duration: 2000 }
		),
	warning: (msg: string) =>
		toast.custom(
			<CustomToast
				message={msg}
				type='warning'
			/>,
			{ duration: 2000 }
		),
	error: (msg: string) =>
		toast.custom(
			<CustomToast
				message={msg}
				type='error'
			/>,
			{ duration: 2000 }
		),
	info: (msg: string) =>
		toast.custom(
			<CustomToast
				message={msg}
				type='info'
			/>,
			{ duration: 2000 }
		),
};
