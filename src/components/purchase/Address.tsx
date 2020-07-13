import React, { useState} from 'react';
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
import Logo from '../../logo.png';
import Arrow from '../../images/up-arrow.svg';
import { Link} from 'react-router-dom';

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

export default function SignUp() {
    const classes = useStyles();
    const [completeOrder, setCompleteOrder] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [errorEmptyInput, setErrorEmptyInput] = useState('');

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
            setCompleteOrder(true);
            
        } else setErrorEmptyInput('All fields are required!');
    };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/pizzafolks' className='getStartedHeaderLink'>
                    {'Back to Pizza Folks'}
                </Link>
            </div>

            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
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
                        <br />
                        {completeOrder ? 'Your order is Submited!' : null}
                    </form>
                </div>
            </Container>

            <img
                src={Arrow}
                alt='arrow'
                className='arrow-up'
                onClick={scrollUp}
            />
        </>
    );
}
