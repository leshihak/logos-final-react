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
    TextField,
} from '@material-ui/core';
import SimpleMap from './SimpleMap';
import Arrow from '../images/up-arrow.svg';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top';

export default function Contact() {
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
                    <Link className='burger-menu-link' to='/about'>
                        {'About'}
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

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

            <div className='contactWithMe'>
                <h1 className='chooseFoodPage-title'>Contact</h1>

                <div className='contactBlock'>
                    <img
                        className='contactImg'
                        src='https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/96283723_1068310243566363_840147391813255168_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=k5k4zAbUngUAX82KVeq&_nc_ht=scontent.flwo1-1.fna&oh=49d980a6217f25b7453200b14a5ff031&oe=5F330BEE'
                        alt='me'
                    />
                    <div className='contact-fields'>
                        <TextField
                            id='filled-textarea'
                            label='My Name'
                            value='Nataliia'
                            multiline
                            variant='filled'
                            disabled
                        />
                        <TextField
                            id='filled-textarea'
                            label='My Phone'
                            value='+380 95 336 18 89'
                            multiline
                            variant='filled'
                            disabled
                        />
                        <TextField
                            id='filled-textarea'
                            label='My Email'
                            value='nat.leshchak@gmail.com'
                            multiline
                            variant='filled'
                            disabled
                        />
                        <TextField
                            id='filled-textarea'
                            label='My City'
                            value='Lviv, Ukraine'
                            multiline
                            variant='filled'
                            disabled
                        />
                    </div>
                </div>

                <SimpleMap />
            </div>

            <img
                src={Arrow}
                alt='arrow'
                className='arrow-up'
                onClick={scrollUp}
            />
        </>
    );
}
