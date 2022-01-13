import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

// selectors
const getUserFeatureSelector = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureSelector,
    state => state.maskUserName
);

export const getCurrentUser = createSelector(
    getUserFeatureSelector,
    state => state.currentUser
);
