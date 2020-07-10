import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../logo.png';
import Arrow from '../../images/up-arrow.svg';
import { Fade } from 'react-awesome-reveal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    ButtonGroup,
    Card,
    makeStyles,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core';

interface WineType {
    name: string;
    title: string;
    ingredients: string;
    price: number;
    count: number;
    img: string;
    delay: number;
    id: number;
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 360,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Wine() {
    const classes = useStyles();
    const [arrayOfWine, setArrayOfWine] = useState([]);
    let [clicks, setClicks] = useState<number>(0);

    const incrementItem = () => {
        if (clicks < 10) setClicks((clicks += 1));
    };

    const decreaseItem = () => {
        if (clicks) setClicks((clicks -= 1));
    };

    useEffect(() => {
        axios
            .get('http://localhost:3001/wine')
            .then((res) => {
                setArrayOfWine(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const renderWine = () => {
        return arrayOfWine.map((wine: WineType) => {
            return (
                <div key={wine.id}>
                    <Fade delay={wine.delay} className='fade-selection'>
                        <img
                            src={wine.img}
                            alt='Wine'
                            className='selection-img'
                        />
                        <div>
                            <Card className={classes.root} variant='outlined'>
                                <CardContent>
                                    <Typography
                                        className={classes.title}
                                        color='textSecondary'
                                        gutterBottom
                                    >
                                        {wine.name}
                                    </Typography>
                                    <Typography variant='h5' component='h2'>
                                        {wine.title}
                                    </Typography>
                                    <Typography
                                        className={classes.pos}
                                        color='textSecondary'
                                    >
                                        {wine.ingredients}
                                    </Typography>
                                    <Typography variant='body2' component='p'>
                                        {wine.price} UAH
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <ButtonGroup
                                        disableElevation
                                        variant='contained'
                                        color='secondary'
                                    >
                                        <Button onClick={decreaseItem}>
                                            -
                                        </Button>
                                        <span className='count'>
                                            {wine.count}
                                        </span>
                                        <Button onClick={incrementItem}>
                                            +
                                        </Button>
                                    </ButtonGroup>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Order
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Fade>
                </div>
            );
        });
    };

    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/pizzafolks' className='getStartedHeaderLink'>
                    {'Back to Pizza Folks'}
                </Link>
            </div>

            <div className='choose-food-block'>
                <Link to='/pizza' className='choose-food-link'>
                    {'Pizza'}
                </Link>
                <Link to='/burger' className='choose-food-link'>
                    {'Burgers'}
                </Link>
                <Link to='/sushi' className='choose-food-link'>
                    {'Sushi'}
                </Link>
            </div>

            {renderWine()}

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

            <img
                src={Arrow}
                alt='arrow'
                className='arrow-up'
                onClick={scrollUp}
            />
        </>
    );
}
