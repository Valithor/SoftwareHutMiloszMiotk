import { IWatchLater } from '../../services/movies.service';

export enum MovieStoreActions {
    ADD_TO_WATCHLATER = 'ADD_TO_WATCHLATER',
    DELETE_WATCHLATER = 'DELETE_WATCHLATER',
    SET_AS_WATCHED = 'SET_AS_WATCHED',
}

export interface IAddToWatchLater {
  type: MovieStoreActions.ADD_TO_WATCHLATER,
  payload: {
    movie: IWatchLater,
  }
}

export interface IDeleteWatchLater {
  type: MovieStoreActions.DELETE_WATCHLATER,
  payload: {
    id: number,
  }
}
export interface ISetAsWatched {
    type: MovieStoreActions.SET_AS_WATCHED,
    payload: {
      id: number,
    }
  }

export const watchLaterActions = {
  addToWatchLater: (movie: IWatchLater) => ({
    type: MovieStoreActions.ADD_TO_WATCHLATER,
    payload: {
      movie
    }
  }),
  deleteWatchLater: (id: number) => ({
    type: MovieStoreActions.DELETE_WATCHLATER,
    payload: {
      id
    }
  }),
  setAsWatched: (id: number) => ({
    type: MovieStoreActions.SET_AS_WATCHED,
    payload: {
      id
    }
  }),
};


export type Actions = IAddToWatchLater & IDeleteWatchLater;