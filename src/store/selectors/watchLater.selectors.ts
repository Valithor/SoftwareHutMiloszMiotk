import { IStoreState } from '../../store/store';
import { createSelector } from 'reselect';

export const watchLaterSelector = createSelector(
  (state: IStoreState) => state.movies,
  movies => movies.list
);