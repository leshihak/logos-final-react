import React, { useState, useEffect } from 'react';
import Logo from '../logo.png';
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    TextField,
    Typography,
    makeStyles,
    Container,
} from '@material-ui/core';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

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
    const redirect = useHistory();
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsedEmail, setErrorUsedEmail] = useState('');
    const [errorEmptyInput, setErrorEmptyInput] = useState('');
    const [invalidEmail, setInvalidEmail] = useState('');
    const [invalidPassword, setInvalidPassword] = useState('');
    const [arrayOfUsers, setArrayOfUsers] = useState([]);

    const validEmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6})$/;

    useEffect(() => {
        axios
            .get('http://localhost:3001/users')
            .then((res) => {
                setArrayOfUsers(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        // ?????

        // if (email.length <= 2) validEmailRegex.test(email);
        // else setInvalidEmail('Invalid Email');

        // if (password.length < 6)
        //     setInvalidPassword('Password must be 6 characters long');
        // else setInvalidPassword('');

        // ?????

        if (name && email && password) {
            const find = arrayOfUsers.find(
                (user: User) => user.emailValue === email
            );
            if (find !== undefined) {
                setErrorUsedEmail('This email is already used');
            } else {
                // if (email) validEmailRegex.test(email);
                // else if (email.length <= 2) setInvalidEmail('Invalid Email');
                // else if (password.length <= 6)
                //     setInvalidPassword('Password must be 6 characters long');
                // else if (password.length >= 6) setInvalidPassword('');
                // else {
                //     axios
                //         .post('http://localhost:3001/users', {
                //             nameValue: name,
                //             emailValue: email,
                //             passwordValue: password,
                //         })
                //         .then((res) => {
                //             console.log(res.data);
                //         })
                //         .catch((error) => {
                //             console.log(error);
                //         });

                //     redirect.push('/signin');
                // }

                // if (email.length <= 2) validEmailRegex.test(email);
                // else setInvalidEmail('Invalid Email');

                // if (password.length < 6)
                //     setInvalidPassword('Password must be 6 characters long');
                // else setInvalidPassword('');

                axios
                    .post('http://localhost:3001/users', {
                        nameValue: name,
                        emailValue: email,
                        passwordValue: password,
                    })
                    .then((res) => {
                        console.log(res.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                redirect.push('/signin');
            }
        } else {
            setErrorEmptyInput('Maybe some inputs are empty');
        }
    };

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
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete='off'
                                    name='firstName'
                                    variant='outlined'
                                    required
                                    fullWidth
                                    id='firstName'
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
                                    id='email'
                                    type='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setEmail(event.target.value)}
                                />
                                {errorUsedEmail}
                                <br />
                                {invalidEmail}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant='outlined'
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    value={password}
                                    autoComplete='password'
                                    onChange={(
                                        event: React.ChangeEvent<
                                            HTMLInputElement
                                        >
                                    ) => setPassword(event.target.value)}
                                />
                                {invalidPassword}
                                <br />
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
                            Sign Up
                        </Button>
                        <Grid container justify='center'>
                            <Grid item>
                                <Link to='/signin'>
                                    {'Already have an account? Sign in'}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </>
    );
}
