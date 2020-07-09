import React from 'react';
import Logo from '../logo.png';
import Sushi from '../images/sushi.jpeg';
import Burgers from '../images/burgers.jpg';
import Wine from '../images/wine.jpg';
import Pizza from '../images/pizza.jpg';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
// import { v4 as uuidv4 } from 'uuid';
import {
    makeStyles,
    SwipeableDrawer,
    Button,
    List,
    ListItem,
} from '@material-ui/core';

// const arrayOfPizzas = [
//     {
//         pizza: 'Pizza',
//         title: 'Diabola',
//         ingredients: 'Tomato sauce, mozzarella cheese, chili pepper, pepperoni.',
//         price: 170,
//         size: '30 cm',
//         count: 0,
//         img: '',
//         id: uuidv4()
//     },
//     {
//         pizza: 'Pizza',
//         title: 'Carbonara',
//         ingredients: 'Tomato sauce, ham, baked egg, mozzarella cheese, Bavarian sausages.',
//         price: 175,
//         size: '30 cm',
//         count: 0,
//         img: '',
//         id: uuidv4()
//     },
//     {
//         pizza: 'Pizza',
//         title: 'Quattro Formaggi',
//         ingredients: 'Cream sauce, parmesan cheese, mozzarella cheese, ricotta cheese, dorblu cheese, walnut, pear.',
//         price: 130,
//         size: '30 cm',
//         count: 0,
//         img: '',
//         id: uuidv4()
//     },
//     {
//         pizza: 'Pizza',
//         title: 'Margarita',
//         ingredients: 'Tomato sauce, mozzarella cheese, tomatoes.',
//         price: 140,
//         size: '30 cm',
//         count: 0,
//         img: '',
//         id: uuidv4()
//     },
//     {
//         pizza: 'Pizza',
//         title: 'Cesario',
//         ingredients: 'Creamy sauce, tomatoes, crispy salad, parmesan cheese, chicken, mozzarella cheese, quail eggs.',
//         price: 150,
//         size: '30 cm',
//         count: 0,
//         img: '',
//         id: uuidv4()
//     },
//     {
//         pizza: 'Pizza',
//         title: 'Capricciosa',
//         ingredients: 'Tomato sauce, mozzarella cheese,ham, fresh mushrooms.',
//         price: 160,
//         size: '30 cm',
//         count: 0,
//         img: '',
//         id: uuidv4()
//     },
    
// ]

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top';

export default function ChooseFoodPage() {
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
                    <Link className='burger-menu-link' to='/about'>
                        {'About'}
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

            <h1 className='chooseFoodPage-title'>Choose what do you want...</h1>

            <div className='chooseFoodPage-icons'>
                <Fade className='fade'>
                    <p>Pizza...</p>
                    <img
                        src={Pizza}
                        alt='Pizza'
                        className='chooseFoodPage-img'
                    />
                    <Link to='/pizza' className='chooseFoodLink'>
                        {'Choose Pizza'}
                    </Link>
                </Fade>
                <Fade delay={1000} className='fade'>
                    <p>...or Sushi...</p>
                    <img
                        src={Sushi}
                        alt='Sushi'
                        className='chooseFoodPage-img'
                    />
                    <Link to='/sushi' className='chooseFoodLink'>
                        {'Choose Sushi'}
                    </Link>
                </Fade>
                <Fade delay={2000} className='fade'>
                    <p>...or may be some Burgers?</p>
                    <img
                        src={Burgers}
                        alt='Burgers'
                        className='chooseFoodPage-img'
                    />
                    <Link to='/burgers' className='chooseFoodLink'>
                        {'Choose Burgers'}
                    </Link>
                </Fade>
                <Fade delay={3000} className='fade'>
                    <p>...and finally Wine!</p>
                    <img src={Wine} alt='Wine' className='chooseFoodPage-img' />
                    <Link to='/wine' className='chooseFoodLink'>
                        {'Choose Wine'}
                    </Link>
                </Fade>
                <Fade delay={4000}>
                    <h2 className='chooseFoodPage-title'>
                        So what will you choose?
                    </h2>
                </Fade>
            </div>
            <div className='userCartBlock'>
                <Link to='/cart'>
                    <ShoppingCartIcon
                        color='secondary'
                        fontSize='large'
                        className='userCart'
                    />
                </Link>
                <h3>Your Cart is here</h3>
            </div>
        </>
    );
}
