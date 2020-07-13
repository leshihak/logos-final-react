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

interface PizzaType {
    name: string;
    title: string;
    ingredients: string;
    price: number;
    size: string;
    count: number;
    img: string;
    delay: number;
    id: number;
    order: boolean;
    orderPrice: number;
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

export default function Pizza() {
    const classes = useStyles();
    const [arrayOfPizzas, setArrayOfPizzas] = useState<any[]>([]);
    const [orderText, setOrderText] = useState<string>('');

    const incrementItem = (id: number) => {
        const pizza = arrayOfPizzas.find((pizza) => pizza.id === id);
        if (pizza.count < 10) pizza.count++;
        setArrayOfPizzas([...arrayOfPizzas]);

        pizza.count <= 1
            ? (pizza.orderPrice = pizza.price)
            : (pizza.orderPrice = pizza.count * pizza.price);

        axios
            .put(`http://localhost:3001/pizzas/${id}/`, pizza)
            .catch((error) => {
                console.log(error);
            });
    };

    const decreaseItem = (id: number) => {
        const pizza = arrayOfPizzas.find((pizza) => pizza.id === id);
        if (pizza.count) pizza.count--;
        setArrayOfPizzas([...arrayOfPizzas]);

        pizza.count === 0
            ? (pizza.orderPrice = pizza.price)
            : (pizza.orderPrice = pizza.count * pizza.price);

        axios
            .put(`http://localhost:3001/pizzas/${id}/`, pizza)
            .catch((error) => {
                console.log(error);
            });
    };

    const handleOrderItem = (id: number) => {
        const pizza = arrayOfPizzas.find((pizza) => pizza.id === id);
        setArrayOfPizzas([...arrayOfPizzas]);

        if (pizza.count === 0) {
            setOrderText('');
            pizza.order = false;
        } else {
            setOrderText(
                `You order ${pizza.name} ${pizza.title}, amount of ${pizza.count} pieces, price: ${pizza.orderPrice} UAH.`
            );
            pizza.order = true;
        }

        axios
            .put(`http://localhost:3001/pizzas/${id}/`, pizza)
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .get('http://localhost:3001/pizzas')
            .then((res) => {
                setArrayOfPizzas(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const renderPizza = () => {
        return arrayOfPizzas.map((pizza: PizzaType) => {
            return (
                <div key={pizza.id}>
                    <Fade delay={pizza.delay} className='fade-selection'>
                        <img
                            src={pizza.img}
                            alt='Pizza'
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
                                        {pizza.name}
                                    </Typography>
                                    <Typography variant='h5' component='h2'>
                                        {pizza.title}
                                    </Typography>
                                    <Typography
                                        className={classes.pos}
                                        color='textSecondary'
                                    >
                                        {pizza.ingredients}
                                    </Typography>
                                    <Typography variant='body2' component='p'>
                                        {pizza.orderPrice} UAH
                                        <br />
                                        {pizza.size}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <div className='button-group'>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={() =>
                                                decreaseItem(pizza.id)
                                            }
                                        >
                                            -
                                        </Button>
                                        <div className='count'>
                                            {pizza.count}
                                        </div>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={() =>
                                                incrementItem(pizza.id)
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={() =>
                                            handleOrderItem(pizza.id)
                                        }
                                    >
                                        Order
                                    </Button>
                                </CardActions>
                                <br />
                                <Typography variant='body2' component='p'>
                                    {orderText}
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
                <Link to='/sushi' className='choose-food-link'>
                    {'Sushi'}
                </Link>
                <Link to='/burger' className='choose-food-link'>
                    {'Burgers'}
                </Link>
                <Link to='/wine' className='choose-food-link'>
                    {'Wine'}
                </Link>
            </div>

            {renderPizza()}

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
