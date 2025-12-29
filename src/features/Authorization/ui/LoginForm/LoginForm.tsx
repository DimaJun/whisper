import s from '../Authorization.module.scss';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function LoginForm() {
	return (
		<form className={s.form}>
			<h1>Логин</h1>
			<Input
				className={s.input}
				label='Почта'
				placeholder='Введите почту..'
				type='email'
				autoComplete='email'
			/>
			<Input
				className={s.input}
				label='Пароль'
				placeholder='Введите пароль..'
				type='password'
			/>
			<Button
				className={s.button}
				type='button'
			>
				Логин
			</Button>
		</form>
	);
}
