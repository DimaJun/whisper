import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/app/providers/store';

export const selectIsAuthorized = createSelector([(state: RootState) => state.auth], (auth) =>
	Boolean(auth.user && auth.access_token)
);
