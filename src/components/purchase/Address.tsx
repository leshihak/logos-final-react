import React, { useState } from 'react';
import {
    Button,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    makeStyles,
    Container,
} from '@material-ui/core';
import axios from 'axios';
import Arrow from '../../images/up-arrow.svg';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface Props {
    arrayOfOrderFood: any[];
    deleteAllItemsAfterSubmit: () => void;
    setShowModal: any;
}

export default function Address({
    arrayOfOrderFood,
    deleteAllItemsAfterSubmit,
    setShowModal,
}: Props) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [errorEmptyInput, setErrorEmptyInput] = useState('');
    const handleShowModal = () => setShowModal(true);

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        if (name && phone && city && street && house) {
            axios
                .post('http://localhost:3001/orderaddress', {
                    nameValue: name,
                    phoneValue: phone,
                    cityValue: city,
                    streetValue: street,
                    houseValue: house,
                })
                .catch((error) => {
                    console.log(error);
                });
            setErrorEmptyInput('');
            setName('');
            setPhone('');
            setCity('');
            setStreet('');
            setHouse('');
            deleteAllItemsAfterSubmit();
            handleShowModal();
        } else {
            // setCompleteOrder(false);
            setErrorEmptyInput('All fields are required!');
        }
    };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    let initialValue = 0;
    let totalPrice = arrayOfOrderFood.reduce(
        (accumulator, currentValue) => accumulator + currentValue.orderPrice,
        initialValue
    );

    return (
        <div className='address'>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                    <div className='cart-address'>
                        {`Total price: ${totalPrice} UAH`}
                    </div>
                    <Typography component='h1' variant='h5'>
                        Delivery
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete='off'
                                    name='name'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    label='Name'
                                    value={name}
                                    autoFocus
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setName(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    type='number'
                                    label='Phone Number'
                                    name='phone'
                                    autoComplete='phone'
                                    value={phone}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setPhone(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    name='city'
                                    label='City'
                                    type='text'
                                    value={city}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setCity(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    name='street'
                                    label='Street'
                                    type='text'
                                    value={street}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setStreet(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    name='house'
                                    label='House'
                                    type='number'
                                    value={house}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setHouse(event.target.value)}
                                />
                                {errorEmptyInput}
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>

            <img
                src={Arrow}
                alt='arrow'
                className='arrow-up'
                onClick={scrollUp}
            />
        </div>
    );
}
