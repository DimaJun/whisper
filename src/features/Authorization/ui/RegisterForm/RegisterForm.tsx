import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import s from '../Authorization.module.scss';
import { RegisterFormType, signupSchema } from '../../model/types/schemas';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useSignupMutation } from '@/features/Authorization/api/auth';

export function RegisterForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterFormType>({
		resolver: zodResolver(signupSchema),
		mode: 'onChange',
	});

	const [signup] = useSignupMutation();

	const onSubmit = async (data: RegisterFormType) => {
		try {
			const res = await signup(data).unwrap();
			console.log(res);
			reset();
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className={s.heading}>Регистрация</h1>
			<Input
				className={s.input}
				label='Никнейм'
				placeholder='Введите никнейм..'
				autoComplete='name'
				error={errors.username?.message}
				{...register('username')}
			/>
			<Input
				className={s.input}
				label='Почта'
				placeholder='Введите почту..'
				autoComplete='email'
				error={errors.email?.message}
				{...register('email')}
			/>
			<Input
				className={s.input}
				label='Пароль'
				placeholder='Введите пароль..'
				type='password'
				error={errors.password?.message}
				{...register('password')}
			/>
			<Input
				className={s.input}
				label='Подтверждение пароля'
				placeholder='Подтвердите пароль..'
				type='password'
				error={errors.passConfirm?.message}
				{...register('passConfirm')}
			/>
			<Button
				className={s.button}
				type='submit'
			>
				Зарегистрироваться
			</Button>
		</form>
	);
}
