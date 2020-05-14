import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, { IMoviesProps } from '../../services/movies.service';
import { makeStyles } from '@material-ui/core/styles';
import useDebounce from '../../hooks/debounce';
import {Container } from '@material-ui/core';


const useStyles = makeStyles({
  center: {
    textAlign: 'center',
  },
  input: {
      textAlign: 'center',
      padding: '28px 48px',
      marginBottom: '48px',
      width: 500,
  },
  bg: {
      minHeight: '100%',
            height: 'auto',
          backgroundImage: `url(${'https://uwalls.pl/gallery/207/16314_thumb_b600.jpg'})`,
          backgroundSize: 'cover',
  },
  cont:{
    width: '400px',
  },
  box: {
    marginBottom: '5%',
    border: '5px solid pink',
    backgroundImage: `url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMTiZAooUTxhdi5_ku2romJDxNT9O6tg_1ofHlmbKecXiZzAqu&usqp=CAU'})`,
},
title:{
        fontSize: '20px',
        fontWeight: "bold"
},
});


const SearchMovie = () => {
    const classes = useStyles();
  const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
  const [movieToSearch, setMovieToSearch] = React.useState('');

  const debouncedSearchTerm = useDebounce(movieToSearch, 500);

  React.useEffect(() => {
      if(debouncedSearchTerm){      
    movieService.searchByName(movieToSearch).then(resp => {
      if (resp) {
        setMovies(resp);
      }
    });
}else{
    setMovies(null);
}
  }, [debouncedSearchTerm]);


  return (
    <div className={classes.bg}>
      <NavPanel/><div  className={classes.center} >
          <Container>
      <input className={classes.input}
        placeholder="Enter movie name"
        onChange={event => setMovieToSearch(event.target.value)}
      /></Container>
          <Container className={classes.cont}>
            {!!movies?.movies.length &&
            movies?.movies.map(movie => (
              <div key={movie.id} className={classes.box}>
                <div className={classes.title}> {movie.title}</div>
                <div>
                  <img className={classes.center} src={movie.poster}
                       alt={movie.title}/>
                </div>
                <div className={classes.center}> {movie.type}</div>
                <div className={classes.center}> {movie.year} </div>
                <br/>
              </div>
            ))
            }
          </Container>
    </div>
    </div>
  );
};

export default SearchMovie;