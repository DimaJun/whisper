import { baseApi } from '@/shared/configs/api';
import { SignupDTO } from '@/features/Authorization/model/types/auth';
import { User } from '@/entities/User';

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		signup: build.mutation<User, SignupDTO>({
			query: (body) => ({
				url: '/auth/signup',
				method: 'POST',
				body,
			}),
		}),
	}),
});

export const { useSignupMutation } = authApi;
