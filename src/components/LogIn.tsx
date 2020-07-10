import React, { useState, useEffect } from 'react';
import Logo from '../logo.png';
import {
    Avatar,
    Button,
    CssBaseline,
    Grid,
    Typography,
    makeStyles,
    Container,
    TextField,
} from '@material-ui/core';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

interface User {
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const redirect = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmptyUser, setErrorEmptyUser] = useState('');
    const [arrayOfUsers, setArrayOfUsers] = useState([]);

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

        if (email && password) {
            const findEmail = arrayOfUsers.find(
                (user: User) => user.emailValue === email
            );

            const findPassword = arrayOfUsers.find(
                (user: User) => user.passwordValue === password
            );

            if (findEmail === undefined && findPassword === undefined) {
                setErrorEmptyUser('User is not register in the system');
            } else redirect.push('/pizzafolks');
        } else {
            setErrorEmptyUser('Maybe some inputs are empty');
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
                        Sign in
                    </Typography>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            value={email}
                            autoComplete='email'
                            autoFocus
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setEmail(event.target.value)}
                        />
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setPassword(event.target.value)}
                        />
                        {errorEmptyUser}
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container justify='center'>
                            <Grid item>
                                <Link to='/signup'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </>
    );
}
