import { User } from '@/entities/User';

export interface AuthStateSchema {
	user?: User;
	access_token?: string;
}
