import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
	error?: string;
}

export function Input(props: InputProps) {
	const { className, label, error, placeholder, onChange, value, type = 'text', ...rest } = props;

	if (!label) {
		return (
			<div className={classNames(s.wrapper, {}, [className])}>
				<input
					className={s.Input}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					{...rest}
				/>
				{error && <p className={s.error}>{error}</p>}
			</div>
		);
	}

	return (
		<div className={classNames(s.wrapper, {}, [className])}>
			<label className={s.label}>{label}</label>
			<input
				className={s.Input}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				{...rest}
			/>
			{error && <p className={s.error}>{error}</p>}
		</div>
	);
}
