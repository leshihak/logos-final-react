import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../logo.png';
import Arrow from '../../images/up-arrow.svg';
import { Fade } from 'react-awesome-reveal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
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
    order: boolean;
    orderPrice: number;
    orderText: string;
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
    const [arrayOfWine, setArrayOfWine] = useState<any[]>([]);

    const incrementItem = (id: number) => {
        const wine = arrayOfWine.find((wine) => wine.id === id);
        if (wine.count < 10) wine.count++;
        setArrayOfWine([...arrayOfWine]);

        if (wine.count === 0) {
            wine.orderText = '';
            wine.orderPrice = wine.price;
        } else wine.orderPrice = wine.count * wine.price;

        axios.put(`http://localhost:3001/wine/${id}/`, wine).catch((error) => {
            console.log(error);
        });
    };

    const decreaseItem = (id: number) => {
        const wine = arrayOfWine.find((wine) => wine.id === id);
        if (wine.count) wine.count--;
        setArrayOfWine([...arrayOfWine]);

        if (wine.count === 0) {
            wine.orderText = '';
            wine.orderPrice = wine.price;
        } else wine.orderPrice = wine.count * wine.price;

        axios.put(`http://localhost:3001/wine/${id}/`, wine).catch((error) => {
            console.log(error);
        });
    };

    const handleOrderItem = (id: number) => {
        const wine = arrayOfWine.find((wine) => wine.id === id);
        setArrayOfWine([...arrayOfWine]);

        if (wine.count === 0) wine.orderText = '';
        else {
            wine.orderText = `You order ${wine.name} ${wine.title}, amount of ${wine.count} pieces, price: ${wine.orderPrice} UAH.`;

            axios.post('http://localhost:3001/cart', wine).catch((error) => {
                console.log(error);
            });
        }
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

    const filterCheapItems = () => {
        const cheapFood = arrayOfWine.sort((a, b) =>
            a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        );
        setArrayOfWine([...cheapFood]);
    };

    const filterExpensiveItems = () => {
        const expensiveFood = arrayOfWine.sort((a, b) =>
            a.price < b.price ? 1 : b.price < a.price ? -1 : 0
        );
        setArrayOfWine([...expensiveFood]);
    };

    const resetFilter = () => {
        axios
            .get('http://localhost:3001/wine')
            .then((res) => {
                setArrayOfWine(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                                        {wine.orderPrice} UAH
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <div className='button-group'>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={() =>
                                                decreaseItem(wine.id)
                                            }
                                        >
                                            -
                                        </Button>
                                        <div className='count'>
                                            {wine.count}
                                        </div>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={() =>
                                                incrementItem(wine.id)
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={() => handleOrderItem(wine.id)}
                                    >
                                        Order
                                    </Button>
                                </CardActions>
                                <br />
                                <Typography variant='body2' component='p'>
                                    {wine.orderText}
                                </Typography>
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

            <div className='filter-block'>
                <h2>Filter: </h2>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={filterCheapItems}
                >
                    Cheaper
                </Button>
                <Button
                    variant='outlined'
                    color='primary'
                    onClick={filterExpensiveItems}
                >
                    More expensive
                </Button>
                <Button
                    variant='outlined'
                    color='secondary'
                    onClick={resetFilter}
                >
                    Reset
                </Button>
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
