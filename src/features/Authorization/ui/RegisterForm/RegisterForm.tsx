import s from '../Authorization.module.scss';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function RegisterForm() {
	return (
		<form className={s.form}>
			<h1 className={s.heading}>Регистрация</h1>
			<Input
				className={s.input}
				label='Никнейм'
				placeholder='Введите никнейм..'
				autoComplete='name'
			/>
			<Input
				className={s.input}
				label='Почта'
				placeholder='Введите почту..'
				autoComplete='email'
			/>
			<Input
				className={s.input}
				label='Пароль'
				placeholder='Введите пароль..'
				type='password'
			/>
			<Input
				className={s.input}
				label='Подтверждение пароля'
				placeholder='Подтвердите пароль..'
				type='password'
			/>
			<Button
				className={s.button}
				type='button'
			>
				Зарегистрироваться
			</Button>
		</form>
	);
}
