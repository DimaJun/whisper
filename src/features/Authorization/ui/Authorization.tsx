import s from './Authorization.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function Authorization() {
	return <div className={classNames(s.Authorization, {}, [])}>Authorization component</div>;
}
