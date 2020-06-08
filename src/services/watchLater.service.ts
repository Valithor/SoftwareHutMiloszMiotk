import store from '../store';
import { watchLaterActions } from '../store/actions/watchLater.actions';
import { IMovieResponse, IWatchLater} from './movies.service';

export class WatchLaterService {
  addToWatchLater(movie: IMovieResponse, id: number, watched: boolean) {
    const watchLaterMovie: IWatchLater = {
      id: id,
      Actors: movie.Actors,
      Awards: movie.Awards,
      BoxOffice: movie.BoxOffice,
      Country: movie.Country,
      DVD: movie.DVD,
      Director: movie.Director,
      Genre: movie.Genre,
      Language: movie.Language,
      Metascore: movie.Metascore,
      Plot: movie.Plot,
      Poster: movie.Poster,
      Production: movie.Production,
      Rated: movie.Rated,
      Ratings: movie.Ratings,
      Released: movie.Released,
      Runtime: movie.Runtime,
      Title: movie.Title,
      Type: movie.Type,
      Website: movie.Website,
      Writer: movie.Writer,
      Year: movie.Year,
      imdbID: movie.imdbID,
      imdbRating: movie.imdbRating,
      imdbVotes: movie.imdbVotes,
      Error: movie.Error,
      Response: movie.Response,
      watched: watched
    }
    store.dispatch(watchLaterActions.addToWatchLater(watchLaterMovie));
  }

  deleteWatchLater(id: number) {
    store.dispatch(watchLaterActions.deleteWatchLater(id));
  }

  setAsWatched(id: number) {
    store.dispatch(watchLaterActions.setAsWatched(id));
  }

}