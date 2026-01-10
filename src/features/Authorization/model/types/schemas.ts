import { z } from 'zod';

export const signupSchema = z
	.object({
		email: z.email('Некорректный email').max(254, 'Email слишком длинный'),
		username: z
			.string()
			.min(3, 'Минимум 3 символа')
			.max(30, 'Максимум 30 символов')
			.regex(/^[a-zA-Z0-9_]+$/, 'Только латиница, цифры и _'),
		password: z
			.string()
			.min(8, 'Минимум 8 символов')
			.max(64, 'Максимум 64 символа')
			.regex(/[A-Za-z]/, 'Нужны буквы (A-Za-z)')
			.regex(/\d/, 'Нужна цифра')
			.regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/, 'Нужен спец. символ'),
		passConfirm: z.string(),
	})
	.refine((data) => data.password === data.passConfirm, {
		error: 'Пароли не совпадают',
		path: ['passConfirm'],
	});

export type RegisterFormType = z.infer<typeof signupSchema>;
