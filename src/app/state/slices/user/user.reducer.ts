import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User } from '../../../user/user';

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

// initial state
const initialState: UserState = {
    maskUserName: true,
    currentUser: null,
}

// reducer
export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.maskUserName, (state): UserState => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
);