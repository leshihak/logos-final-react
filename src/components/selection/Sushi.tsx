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

interface SushiType {
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

export default function Sushi() {
    const classes = useStyles();
    const [arrayOfSushi, setArrayOfSushi] = useState([]);
    let [clicks, setClicks] = useState<number>(0);

    const incrementItem = () => {
        if (clicks < 10) setClicks((clicks += 1));
    };

    const decreaseItem = () => {
        if (clicks) setClicks((clicks -= 1));
    };

    useEffect(() => {
        axios
            .get('http://localhost:3001/sushi')
            .then((res) => {
                setArrayOfSushi(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const renderSushi = () => {
        return arrayOfSushi.map((sushi: SushiType) => {
            return (
                <div key={sushi.id}>
                    <Fade delay={sushi.delay} className='fade-selection'>
                        <img
                            src={sushi.img}
                            alt='Sushi'
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
                                        {sushi.name}
                                    </Typography>
                                    <Typography variant='h5' component='h2'>
                                        {sushi.title}
                                    </Typography>
                                    <Typography
                                        className={classes.pos}
                                        color='textSecondary'
                                    >
                                        {sushi.ingredients}
                                    </Typography>
                                    <Typography variant='body2' component='p'>
                                        {sushi.price} UAH
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
                                            {sushi.count}
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
                <Link to='/wine' className='choose-food-link'>
                    {'Wine'}
                </Link>
            </div>

            {renderSushi()}

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
