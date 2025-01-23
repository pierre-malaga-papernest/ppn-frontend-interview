import { User } from '@interfaces/user';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectMe = createFeatureSelector<User>('me');
export const selectUsers = createFeatureSelector<User[]>('users');

export const selectUsersPageViewModel = createSelector(
    selectMe,
    selectUsers,
    (me, users) => ({
        me, users
    })
)
