import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import Arrow from '../../images/up-arrow.svg';
import axios from 'axios';
import {
    Card,
    makeStyles,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core';

interface Food {
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
        minWidth: 310,
        maxWidth: 310,
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

export default function Cart() {
    const classes = useStyles();
    const [arrayOfWine, setArrayOfWine] = useState<any[]>([]);
    const [arrayOfSushi, setArrayOfSushi] = useState<any[]>([]);
    const [arrayOfPizzas, setArrayOfPizzas] = useState<any[]>([]);
    const [arrayOfBurgers, setArrayOfBurgers] = useState<any[]>([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/wine')
            .then((res) => {
                setArrayOfWine(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:3001/sushi')
            .then((res) => {
                setArrayOfSushi(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:3001/burgers')
            .then((res) => {
                setArrayOfBurgers(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get('http://localhost:3001/pizzas')
            .then((res) => {
                setArrayOfPizzas(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    let newArrayWithItems = arrayOfBurgers.concat(
        arrayOfPizzas,
        arrayOfSushi,
        arrayOfWine
    );

    let arrayOfOrderFood = newArrayWithItems.filter(
        (food) => food.order === true
    );

    // useEffect(() => {
    //     axios
    //         .post('http://localhost:3001/cart', arrayOfOrderFood)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // });

    console.log(arrayOfOrderFood);

    // const handleDeleteFood = (id: number) => {
    //     const food = arrayOfOrderFood.find((food) => (food.id = id));
    //     food.order = false;
    //     setArrayOfOrderFood([...arrayOfOrderFood])
    // };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    const renderPurchase = () => {
        return arrayOfOrderFood.map((food: Food) => {
            return (
                <div key={food.id}>
                    <div className='cartFood'>
                        <img className='cart-img' src={food.img} alt='food' />
                        <>
                            <Card className={classes.root} variant='outlined'>
                                <CardContent>
                                    <Typography variant='h5' component='h2'>
                                        {food.name} {food.title}
                                    </Typography>
                                    <Typography
                                        className={classes.pos}
                                        color='textSecondary'
                                    >
                                        Amount: {food.count}
                                    </Typography>
                                    <Typography variant='body2' component='p'>
                                        Price: {food.orderPrice} UAH
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <div className='button-group'>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            // onClick={() =>
                                            //     handleDeleteFood(food.id)
                                            // }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </CardActions>
                            </Card>
                        </>
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/pizzaFolks' className='getStartedHeaderLink'>
                    {'Back to Pizza Folks'}
                </Link>
            </div>

            <h1 className='chooseFoodPage-title'>Your Cart</h1>

            {renderPurchase()}

            <Link className='cart-address' to='/address'>
                Order
            </Link>

            <img
                src={Arrow}
                alt='arrow'
                className='arrow-up'
                onClick={scrollUp}
            />
        </>
    );
}
