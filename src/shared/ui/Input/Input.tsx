import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label?: string;
}

export function Input(props: InputProps) {
	const { className, label, placeholder, onChange, value, type = 'text', ...rest } = props;

	if (!label) {
		return (
			<input
				className={classNames(s.Input, {}, [className])}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				{...rest}
			/>
		);
	}

	return (
		<div className={classNames(s.wrapper, {}, [className])}>
			<label className={s.label}>{label}</label>
			<input
				className={classNames(s.Input, {}, [])}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
}
