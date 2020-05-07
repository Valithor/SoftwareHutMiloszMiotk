import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Home, Movie, Search } from '@material-ui/icons';
import { Drawer, Icon } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '5px',
        alignSelf: "left",
    },
    list: {
        listStyle: "none",
    },
    button: {
        marginLeft: "30px",
        alignSelf: "left",
        alignContent: 'center',
        width: '200px',
    }
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen }) => {
    const classes = makeClasses();
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();

    const RedirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>

    return (
        <div>
            <Drawer
                open={isOpen || shouldBeOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className={classes.drawerContent}>
                    <ul className={classes.list}>            
                       <li ><button className={classes.button} onClick={() => history.push('/')}> <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="home"  >                
                        <Home />
                        </IconButton>
                    </button></li>
                        <li><button className={classes.button} onClick={() => history.push('/movie')} ><IconButton
                        edge="start"
                        color="inherit"
                        aria-label="home"  >
                        <Movie />
                        </IconButton></button></li>
                        <li><button className={classes.button} onClick={() => history.push('/search')}><IconButton
                        edge="start"
                        color="inherit"
                        aria-label="home"  >
                        <Search />
                        </IconButton></button></li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;