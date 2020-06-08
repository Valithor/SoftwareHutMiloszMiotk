import { Reducer } from 'redux';
import { Actions, MovieStoreActions } from '../actions/watchLater.actions';
import { IWatchLater } from '../../services/movies.service';

export interface IWatchLaterStoreState {
  list: IWatchLater[],
}

export const WatchLaterListInitialState: IWatchLaterStoreState = {
    list: [],
  };

  export const watchLaterStoreReducer: Reducer<IWatchLaterStoreState, Actions> = (state: IWatchLaterStoreState = WatchLaterListInitialState, actions: Actions) => {
    switch (actions.type) {
      case MovieStoreActions.ADD_TO_WATCHLATER:
        return {
          ...state,
          list: [...state.list, actions.payload.movie]
        };
      case MovieStoreActions.DELETE_WATCHLATER:
        return {
          ...state,
          list: state.list.filter(el => el.id !== actions.payload.id)
        };
      case MovieStoreActions.SET_AS_WATCHED:
        const movieFound = state.list.find(el => el.id === actions.payload.id);
        if (movieFound) {
          movieFound.watched = !movieFound.watched;
          return {
            ...state,
            list: [...state.list],
          };
        }
        return state;
      default:
        return state;
    }
  };