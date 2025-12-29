import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthStateSchema } from '@/features/Authorization/model/types/auth';

const initialState: AuthStateSchema = {
	// user: {
	// 	id: '1',
	// 	username: 'dima',
	// 	email: 'dimasik',
	// },
	// access_token: 'sadjw91q9w8j190djk019k3dk1pojd3o0i1u0',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action: PayloadAction<AuthStateSchema>) => {
			state.user = action.payload.user;
			state.access_token = action.payload.access_token;
		},
	},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
