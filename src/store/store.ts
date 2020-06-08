import { combineReducers } from 'redux';

import { ITodosListStoreState, todosListInitialState, todosStoreReducer } from './reducers/todos.reducer';
import * as TodosActions from './actions/todos.actions';
import * as WatchLaterActions from './actions/watchLater.actions'
import { IWatchLaterStoreState, watchLaterStoreReducer, WatchLaterListInitialState } from './reducers/watchLater.reducer';

export type StoreActions = TodosActions.Actions & WatchLaterActions.Actions;

export interface IStoreState {
  todos: ITodosListStoreState;
  movies: IWatchLaterStoreState
}

export const initialStoreState: IStoreState = {
  todos: todosListInitialState,
  movies: WatchLaterListInitialState,
};

export const reducers = combineReducers<IStoreState>({
  todos: todosStoreReducer,
  movies: watchLaterStoreReducer,
});
