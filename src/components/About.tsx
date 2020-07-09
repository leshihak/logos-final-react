import React from 'react';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import {
    makeStyles,
    SwipeableDrawer,
    Button,
    List,
    ListItem,
} from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top';

export default function About() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top',
            })}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <Link className='burger-menu-link' to='/'>
                        {'Back to Home Page'}
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className='burger-menu-link' to='/pizzafolks'>
                        {'Back to Pizza Folks'}
                    </Link>
                </ListItem>
                <ListItem>
                    <Link className='burger-menu-link' to='/contact'>
                        {'Contact'}
                    </Link>
                </ListItem>
            </List>
        </div>
    );
    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <div>
                    {(['top'] as Anchor[]).map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>
                                <MenuIcon color='secondary' fontSize='large' />
                            </Button>

                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <h1 className='chooseFoodPage-title'>
                This is the To Do List App v1.0.0. It is part of Logos IT
                Academy Homework.
            </h1>
        </>
    );
}
