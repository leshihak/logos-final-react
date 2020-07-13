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

        const patternIsValid = validEmailRegex.test(email);
        const passwordLengthValid = password.length >= 6;

        if (name && email && password) {
            const find = arrayOfUsers.find(
                (user: User) => user.emailValue === email
            );
            if (find) {
                setErrorUsedEmail('This email is already used');
            } else {
                if (patternIsValid && passwordLengthValid) {
                    axios
                        .post('http://localhost:3001/users', {
                            nameValue: name,
                            emailValue: email,
                            passwordValue: password,
                        })
                        .catch((error) => {
                            console.log(error);
                        });

                    redirect.push('/signin');
                }
                if (!patternIsValid || !passwordLengthValid)
                    setInvalidPassword('Password or email is invalid');
            }
        } else setErrorEmptyInput('All fields are required!');
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
