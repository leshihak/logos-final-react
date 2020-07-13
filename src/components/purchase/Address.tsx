import React, { useState, useEffect } from 'react';
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
import { Link, useHistory } from 'react-router-dom';
import SimpleMap from '../SimpleMap';

interface User {
    nameValue: string;
    emailValue: string;
    passwordValue: string;
}

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

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
    };

    const scrollUp = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/cart' className='getStartedHeaderLink'>
                    {'Back to Cart'}
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
                                    // value={name}
                                    autoFocus
                                    // onChange={(
                                    //     event: React.ChangeEvent<
                                    //         HTMLInputElement
                                    //     >
                                    // ) => setName(event.target.value)}
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
                                    // value={email}
                                    // onChange={(
                                    //     event: React.ChangeEvent<
                                    //         HTMLInputElement
                                    //     >
                                    // ) => setEmail(event.target.value)}
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
                                    // value={password}
                                    // onChange={(
                                    //     event: React.ChangeEvent<
                                    //         HTMLInputElement
                                    //     >
                                    // ) => setPassword(event.target.value)}
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
                                    // value={password}
                                    // onChange={(
                                    //     event: React.ChangeEvent<
                                    //         HTMLInputElement
                                    //     >
                                    // ) => setPassword(event.target.value)}
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
                                    // value={password}
                                    // onChange={(
                                    //     event: React.ChangeEvent<
                                    //         HTMLInputElement
                                    //     >
                                    // ) => setPassword(event.target.value)}
                                />
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
        </>
    );
}
