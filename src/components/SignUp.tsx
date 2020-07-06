import React, { useState } from 'react';
import Logo from '../logo.png';
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Typography,
    makeStyles,
    Container,
} from '@material-ui/core';
import axios from 'axios';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

interface User {
    fullNameValue: string;
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [objectUser, setObjectUser] = useState<User>();

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        axios
            .post('http://localhost:3000/users', {
                fullNameValue: objectUser?.fullNameValue,
                emailValue: objectUser?.emailValue,
                passwordValue: objectUser?.passwordValue,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

        // axios
        //     .delete('http://localhost:3000/users')
        //     .then((resp) => {
        //         resp.data.filter(
        //             (el: {
        //                 fullNameValue: string;
        //                 emailValue: string;
        //                 passwordValue: string;
        //                 id: number;
        //             }) => {
        //                 // el.emailValue !== resp.data.emailValue;
        //             }
        //         );
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });

        setObjectUser({
            fullNameValue: name,
            emailValue: email,
            passwordValue: password,
        });

        setName('');
        setEmail('');
        setPassword('');
    };

    console.log(objectUser);

    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/' className='getStartedHeaderLink'>
                    {'Back to Home Page'}
                </Link>
            </div>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}></Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign up
                    </Typography>
                    <ValidatorForm
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextValidator
                                    autoComplete='off'
                                    name='firstName'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='firstName'
                                    label='Full Name'
                                    value={name}
                                    autoFocus
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setName(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='email'
                                    type='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    value={email}
                                    validators={['required', 'isEmail']}
                                    errorMessages={[
                                        'This field is required',
                                        'Email is not valid',
                                    ]}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setEmail(event.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant='outlined'
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    value={password}
                                    autoComplete='password'
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setPassword(event.target.value)}
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
                            Sign Up
                        </Button>
                        <Grid container justify='center'>
                            <Grid item>
                                <Link to='/signIn'>
                                    {'Already have an account? Sign in'}
                                </Link>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
            </Container>
        </>
    );
}
