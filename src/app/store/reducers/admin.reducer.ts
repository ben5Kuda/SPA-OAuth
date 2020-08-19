import { User } from 'src/app/models/user';
import { createReducer, on, Action, State, createFeatureSelector, createSelector } from '@ngrx/store';
import { getIdentity, getIdentityCompleted } from '../actions/admin.actions';
import { identity } from 'rxjs';

export const IdentityFeatureKey = 'identity';

export interface AdminState {
    identityIsLoading: boolean;
    identity: User;
}

export const initialState: AdminState = {
    identity: null,
    identityIsLoading: false
};

const adminReducer = createReducer(
    initialState,
    on(getIdentity, (state) => ({...state, identityIsLoading: true })),
    on(getIdentityCompleted, (state, {currentIdentity}) => ({...state, identity: currentIdentity, identityIsLoading: false}))
);

export function reducer(state: AdminState, action: Action) {
    console.log(action.type.toString());
    return adminReducer(state, action);
}

export const selectState = createFeatureSelector<any, AdminState>(IdentityFeatureKey);
// (state: any) => state.vehicles;

export const selectIdentity = createSelector(
    selectState,
    (state: AdminState) => state.identity
  );

