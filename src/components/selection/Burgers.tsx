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
interface BurgerType {
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

export default function Burgers() {
    const classes = useStyles();
    const [arrayOfBurgers, setArrayOfBurgers] = useState<any[]>([]);
    const [orderText, setOrderText] = useState<string>('');

    const incrementItem = (id: number) => {
        const burger = arrayOfBurgers.find((burger) => burger.id === id);
        if (burger.count < 10) burger.count++;
        setArrayOfBurgers([...arrayOfBurgers]);

        burger.count <= 1
            ? (burger.orderPrice = burger.price)
            : (burger.orderPrice = burger.count * burger.price);

        axios
            .put(`http://localhost:3001/burgers/${id}/`, burger)
            .catch((error) => {
                console.log(error);
            });
    };

    const decreaseItem = (id: number) => {
        const burger = arrayOfBurgers.find((burger) => burger.id === id);
        if (burger.count) burger.count--;
        setArrayOfBurgers([...arrayOfBurgers]);

        burger.count <= 1
            ? (burger.orderPrice = burger.price)
            : (burger.orderPrice = burger.count * burger.price);

        axios
            .put(`http://localhost:3001/burgers/${id}/`, burger)
            .catch((error) => {
                console.log(error);
            });
    };

    const handleOrderItem = (id: number) => {
        const burger = arrayOfBurgers.find((burger) => burger.id === id);
        setArrayOfBurgers([...arrayOfBurgers]);

        if (burger.count === 0) {
            setOrderText('');
            burger.order = false;
        } else {
            setOrderText(
                `You order ${burger.name} ${burger.title}, amount of ${burger.count} pieces, price: ${burger.orderPrice} UAH.`
            );
            burger.order = true;
        }

        axios
            .put(`http://localhost:3001/burgers/${id}/`, burger)
            .catch((error) => {
                console.log(error);
            });

        // axios
        //     .post('http://localhost:3001/cart', arrayOfBurgers)
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    useEffect(() => {
        axios
            .get('http://localhost:3001/burgers')
            .then((res) => {
                setArrayOfBurgers(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const renderBurger = () => {
        return arrayOfBurgers.map((burger: BurgerType) => {
            return (
                <div key={burger.id}>
                    <Fade delay={burger.delay} className='fade-selection'>
                        <img
                            src={burger.img}
                            alt='Burger'
                            className='selection-img'
                        />
                        <>
                            <Card className={classes.root} variant='outlined'>
                                <CardContent>
                                    <Typography
                                        className={classes.title}
                                        color='textSecondary'
                                        gutterBottom
                                    >
                                        {burger.name}
                                    </Typography>
                                    <Typography variant='h5' component='h2'>
                                        {burger.title}
                                    </Typography>
                                    <Typography
                                        className={classes.pos}
                                        color='textSecondary'
                                    >
                                        {burger.ingredients}
                                    </Typography>
                                    <Typography variant='body2' component='p'>
                                        {burger.orderPrice} UAH
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <div className='button-group'>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={() =>
                                                decreaseItem(burger.id)
                                            }
                                        >
                                            -
                                        </Button>
                                        <div className='count'>
                                            {burger.count}
                                        </div>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            onClick={() =>
                                                incrementItem(burger.id)
                                            }
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Button
                                        variant='contained'
                                        color='secondary'
                                        onClick={() =>
                                            handleOrderItem(burger.id)
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
                        </>
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
                <Link to='/sushi' className='choose-food-link'>
                    {'Sushi'}
                </Link>
                <Link to='/wine' className='choose-food-link'>
                    {'Wine'}
                </Link>
            </div>

            {renderBurger()}

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
