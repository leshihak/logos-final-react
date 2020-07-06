import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import { Fade } from 'react-awesome-reveal';
import Pizza1 from '../../images/pizza1.png';
import Pizza2 from '../../images/pizza2.jpg';
import Pizza3 from '../../images/pizza3.jpg';
import Pizza4 from '../../images/pizza4.jpg';
import Pizza5 from '../../images/pizza5.jpg';
import Pizza6 from '../../images/pizza6.jpg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    ButtonGroup,
    Card,
    makeStyles,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 360,
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

export default function Pizza() {
    const classes = useStyles();
    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/pizzaFolks' className='getStartedHeaderLink'>
                    {'Back to Pizza Folks'}
                </Link>
            </div>

            <div>
                <Fade delay={100} className='fade-pizza'>
                    <img src={Pizza1} alt='Pizz' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Pizza
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Diabola
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Tomato sauce, mozzarella cheese, chili
                                    pepper, pepperoni.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    170 UAH
                                    <br />
                                    {'30 cm'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button>-</Button>
                                    <input type='text' disabled value={0} />
                                    <Button>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={200} className='fade-pizza'>
                    <img src={Pizza2} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Pizza
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Carbonara
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Tomato sauce, ham, baked egg, mozzarella
                                    cheese, Bavarian sausages.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    170 UAH
                                    <br />
                                    {'30 cm'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button>-</Button>
                                    <input type='text' disabled value={0} />
                                    <Button>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={300} className='fade-pizza'>
                    <img src={Pizza3} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Pizza
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Quattro Formaggi
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Cream sauce, parmesan cheese, mozzarella
                                    cheese, ricotta cheese, dorblu cheese,
                                    walnut, pear.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    130 UAH
                                    <br />
                                    {'30 cm'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button>-</Button>
                                    <input type='text' disabled value={0} />
                                    <Button>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={400} className='fade-pizza'>
                    <img src={Pizza4} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Pizza
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Margarita
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Tomato sauce, mozzarella cheese, tomatoes.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    140 UAH
                                    <br />
                                    {'30 cm'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button>-</Button>
                                    <input type='text' disabled value={0} />
                                    <Button>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={500} className='fade-pizza'>
                    <img src={Pizza5} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Pizza
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Cesario
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Creamy sauce, tomatoes, crispy salad,
                                    parmesan cheese, chicken, mozzarella cheese,
                                    quail eggs.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    150 UAH
                                    <br />
                                    {'30 cm'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button>-</Button>
                                    <input type='text' disabled value={0} />
                                    <Button>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={600} className='fade-pizza'>
                    <img src={Pizza6} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Pizza
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Capricciosa
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Tomato sauce, mozzarella cheese,ham, fresh
                                    mushrooms.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    160 UAH
                                    <br />
                                    {'30 cm'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button>-</Button>
                                    <input type='text' disabled value={0} />
                                    <Button>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>
            </div>

            <div className='userCartBlock'>
                <Link to='/cart'>
                    <ShoppingCartIcon
                        color='secondary'
                        fontSize='large'
                        className='userCart'
                    />
                </Link>
                <h3>Your Cart is here</h3>
            </div>
        </>
    );
}
