import { useState } from 'react';

import s from './Authorization.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { LoginForm } from '@/features/Authorization/ui/LoginForm/LoginForm';
import { RegisterForm } from '@/features/Authorization/ui/RegisterForm/RegisterForm';
import { Button } from '@/shared/ui/Button';

export function Authorization() {
	const [isLogin, setIsLogin] = useState(false);

	const changeForm = () => {
		setIsLogin((prev) => !prev);
	};

	return (
		<div className={classNames(s.Authorization, {}, [])}>
			{isLogin ? <LoginForm /> : <RegisterForm />}
			{isLogin ? (
				<Button
					className={s.changeForm}
					type='button'
					onClick={changeForm}
				>
					Не зарегистрированны?
				</Button>
			) : (
				<Button
					className={s.changeForm}
					type='button'
					onClick={changeForm}
				>
					Уже есть аккаунт?
				</Button>
			)}
		</div>
	);
}
