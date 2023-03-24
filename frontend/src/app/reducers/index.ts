import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from "../../environments/environment";

export interface SharedState {

}

export const reducers: ActionReducerMap<SharedState> = {
  //router: fromRouter.routerReducer,
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    // console.log('state', state);
    // console.log('action', action);
    return reducer(state, action);
  };
}

export function initStateFromLocalStorage(
  reducer: ActionReducer<SharedState>
): ActionReducer<SharedState> {
  return function(state, action) {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<SharedState>[] = !environment.production ? [initStateFromLocalStorage] : [initStateFromLocalStorage];
