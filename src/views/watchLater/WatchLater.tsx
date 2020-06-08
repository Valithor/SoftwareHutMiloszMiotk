import React, { useEffect } from 'react';
import NavPanel from '../../components/navPanel/NavPanel';
import movieService from '../../services/movies.service';
import {IWatchLater} from '../../services/movies.service';
import {useSelector} from 'react-redux';
import {watchLaterSelector} from '../../store/selectors/watchLater.selectors';
import { makeStyles, List, ListItem, ListItemText, IconButton, Tooltip, Typography, createStyles } from '@material-ui/core';
import {Bookmark, ThumbDown, ThumbUp, Storage, Delete} from '@material-ui/icons/';
import { NavLink } from 'react-router-dom';
import { useService } from '../../hooks/useService';
import { WatchLaterService } from '../../services/watchLater.service';
import DoneIcon from '@material-ui/icons/Done';

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
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#324aa8',
        color: 'white',
    },
    contentContainer: {
        marginTop: '20px',
        textAlign: 'center',
        margin: 'auto',
        maxWidth: '100%',
    },
    listContainer: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '100%',
        margin: 'auto',
    },
    whiteColor: {
        color: 'white',
    },
    navlink: {
        textDecoration: 'none',
    },
}),
);
const WatchLater = () => {
    const classes = useStyles();
    const watchLaterervice = useService(WatchLaterService);
    const watchLater = useSelector(watchLaterSelector);

    const handleDelete = (movie: IWatchLater) => {
        watchLaterervice.deleteWatchLater(movie.id);
    }

    const handleSetAsWatched = (movie: IWatchLater) => {
        watchLaterervice.setAsWatched(movie.id);
    }

    useEffect(() => {
        console.log(watchLater);
    }, [watchLater])
    return (
        <div className={classes.bg}>
            <NavPanel />
            <div className={classes.contentContainer}>
                {(watchLater.length !== 0) ?
                    <div className={classes.listContainer}>
                        <List className={classes.list}>
                            {watchLater.map((movie, index) =>
                                (movie.Title !== '') ?
                                    <ListItem key={index}>
                                        <ListItemText
                                            classes={{ secondary: classes.whiteColor }}
                                            primary={movie.Title}
                                            secondary={
                                                <Typography variant="body2">
                                                    {movie.Plot}
                                                    <br />
                                                    Watched? {movie.watched ? <ThumbUp style={{ fill: 'green' }}/> : <ThumbDown style={{ fill: 'red' }}/>}
                                                </Typography>}
                                        />
                                        <Tooltip title="Remove">
                                            <IconButton edge="start" aria-label="comments" onClick={() => handleDelete(movie)}>
                                                <Delete style={{ fill: 'white' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <br/>
                                        <Tooltip title="Watched">
                                                <IconButton edge="start" aria-label="comments" onClick={() => handleSetAsWatched(movie)}>
                                                    <DoneIcon style={{ fill: 'white' }} />
                                                </IconButton>
                                            </Tooltip>

                                        <br/>
                                        <Tooltip title="Info">
                                                <NavLink to={`/movie/${movie.id}`} className={classes.navlink}>
                                                    <IconButton edge="end" aria-label="comments">
                                                        <Storage style={{ fill: "white" }} />
                                                    </IconButton>
                                                </NavLink>
                                            </Tooltip>
                                    </ListItem>
                                    : null
                            )}
                        </List>
                    </div>
                    :
                    <Typography variant="h5">Brak ulubionych filmów</Typography>}
            </div>
        </div>
    )
}
export default WatchLater;
