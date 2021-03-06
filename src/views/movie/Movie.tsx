import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel';
import movieService from '../../services/movies.service';
import {IMoviesProps, IMovieResponse} from '../../services/movies.service';
import {Grid, Typography, Paper, makeStyles, createStyles, IconButton, Tooltip} from '@material-ui/core/';
import {useParams} from 'react-router-dom';
import {Bookmark} from '@material-ui/icons/';
import { WatchLaterService } from '../../services/watchLater.service';
import { useService } from '../../hooks/useService';

const useStyles= makeStyles((theme: any)=>
createStyles({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    bg: {
        minHeight: '100%',
              height: 'auto',
            backgroundImage: `url(${'https://uwalls.pl/gallery/207/16314_thumb_b600.jpg'})`,
            backgroundSize: 'cover',
    },
}),
);

const Movie = () => {
    const classes = useStyles();
    let {id}=useParams();
    const watchLaterService = useService(WatchLaterService);
   
    const [movieInfo, setMovieInfo] = React.useState<IMovieResponse | null>(null);
    const handleAddToWatchLater = () => {
        if (movieInfo != null)
            watchLaterService.addToWatchLater(movieInfo, id, false);
        else
            return;
    }
    React.useEffect(()=>{
        movieService.searchById(id).then(resp=>{
            if(resp)
            setMovieInfo(resp);
            console.log(resp);
        });
    }, []);


    return (
        <div className={classes.bg}>
            <NavPanel />
            {movieInfo != null && 
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <img src={movieInfo.Poster}/>
                    </Grid>                
                        <Grid item xs container>
                            <Grid item xs>
                                <Typography variant="h6" gutterBottom>
                                    {movieInfo.Title}, {movieInfo.Year}
                                    <div onClick={handleAddToWatchLater}>
                                <IconButton><Bookmark /></IconButton>
                                </div>
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    {movieInfo.Awards}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {movieInfo.Genre}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {movieInfo.Plot}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Features: <span>&nbsp;&nbsp;</span>{movieInfo.Actors}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Imdb Rating: <span>&nbsp;&nbsp;</span>{movieInfo.imdbRating}
                                </Typography>
                                
                            </Grid>
                    </Grid>
                </Grid>
            </Paper>}

        </div>
    );
};

export default Movie;