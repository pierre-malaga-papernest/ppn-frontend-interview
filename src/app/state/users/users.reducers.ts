import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user';
import {
  StoreStatus,
  StoreStatusType,
} from 'src/app/model/enum/store-status.enum';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';

export interface UsersState {
  users: User[];
  error: string | null;
  status: StoreStatusType;
}

export const initialState: UsersState = {
  users: [],
  error: null,
  status: StoreStatus.idle,
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state: UsersState) => ({
    ...state,
    status: StoreStatus.loading,
  })),
  on(loadUsersSuccess, (state: UsersState, { users }) => ({
    ...state,
    users,
    status: StoreStatus.success,
  })),
  on(loadUsersFailure, (state: UsersState, { error }) => ({
    ...state,
    error,
    status: StoreStatus.error,
  }))
);
