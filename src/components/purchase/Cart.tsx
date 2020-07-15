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
import Address from './Address';
import SubmitModal from './SubmitModal';

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
    const [arrayOfOrderFood, setArrayOfOrderFood] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        axios
            .get('http://localhost:3001/cart')
            .then((res) => {
                setArrayOfOrderFood(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const deleteAllItemsAfterSubmit = () => {
        arrayOfOrderFood.forEach((item) => {
            console.log(item);

            axios
                .delete(`http://localhost:3001/cart/${item.id}/`)
                .then(() => setArrayOfOrderFood([]))
                .catch((error) => {
                    console.log(error);
                });
        });
    };

    const handleDeleteFood = (id: number) => {
        const food = arrayOfOrderFood.find((food) => food.id === id);
        const foodDelete = arrayOfOrderFood.filter((food) => food.id !== id);

        setArrayOfOrderFood([...foodDelete]);

        axios
            .delete(`http://localhost:3001/cart/${food.id}/`)
            .catch((error) => {
                console.log(error);
            });
    };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    let initialValue = 0;
    let totalPrice = arrayOfOrderFood.reduce(
        (accumulator, currentValue) => accumulator + currentValue.orderPrice,
        initialValue
    );

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
                                            onClick={() =>
                                                handleDeleteFood(food.id)
                                            }
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

            {showModal ? (
                <SubmitModal
                    handleCloseModal={handleCloseModal}
                    showModal={showModal}
                />
            ) : null}

            {totalPrice === 0 ? null : (
                <Address
                    arrayOfOrderFood={arrayOfOrderFood}
                    deleteAllItemsAfterSubmit={deleteAllItemsAfterSubmit}
                    setShowModal={setShowModal}
                />
            )}

            <img
                src={Arrow}
                alt='arrow'
                className='arrow-up'
                onClick={scrollUp}
            />
        </>
    );
}
