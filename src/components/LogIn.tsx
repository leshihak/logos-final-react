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
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

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
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
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
                    <ValidatorForm
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                    >
                        <TextValidator
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            value={email}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'This field is required',
                                'Email is not valid',
                            ]}
                            autoComplete='email'
                            autoFocus
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setEmail(event.target.value)}
                        />
                        <TextValidator
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            validators={['required']}
                            errorMessages={['This field is required']}
                            autoComplete='current-password'
                            value={password}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setPassword(event.target.value)}
                        />
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
                                <Link to='/signUp'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
            </Container>
        </>
    );
}
