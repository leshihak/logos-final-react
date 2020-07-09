import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import { Fade } from 'react-awesome-reveal';
import Burger1 from '../../images/burger1.jpg';
import Burger2 from '../../images/burger2.jpg';
import Burger3 from '../../images/burger3.jpg';
import Burger4 from '../../images/burger4.jpg';
import Burger5 from '../../images/burger5.jpg';
import Burger6 from '../../images/burger6.jpg';
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

export default function Burgers() {
    const classes = useStyles();
    let [clicks, setClicks] = useState<number>(0);

    const incrementItem = () => {
        if (clicks < 10) setClicks((clicks += 1));
    };

    const decreaseItem = () => {
        if (clicks) setClicks((clicks -= 1));
    };

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
                    <img src={Burger1} alt='Pizz' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Burger
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    CLASSIC SMASH
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Served with lettuce, tomato, onion, pickles.
100% Certified Angus Beef®. Black Bean burgers include American cheese, Smash Sauce, ketchup on a classic bun.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    170 UAH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button onClick={decreaseItem}>-</Button>
                                    <span className='count'>{clicks}</span>
                                    <Button onClick={incrementItem}>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={200} className='fade-pizza'>
                    <img src={Burger2} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Burger
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    BACON SMASH
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    Applewood smoked bacon, American cheese, lettuce, tomato, mayo on a classic bun.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    175 UAH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button onClick={decreaseItem}>-</Button>
                                    <span className='count'>{clicks}</span>
                                    <Button onClick={incrementItem}>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={300} className='fade-pizza'>
                    <img src={Burger3} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Burger
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    
BACON AVOCADO CLUB
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    With lettuce, tomato, ranch dressing, mayo on a multi-grain bun.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    130 UAH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button onClick={decreaseItem}>-</Button>
                                    <span className='count'>{clicks}</span>
                                    <Button onClick={incrementItem}>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={400} className='fade-pizza'>
                    <img src={Burger4} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Burger
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    BBQ, BACON, CHEDDAR
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    With haystack onions on a classic bun.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    140 UAH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button onClick={decreaseItem}>-</Button>
                                    <span className='count'>{clicks}</span>
                                    <Button onClick={incrementItem}>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={500} className='fade-pizza'>
                    <img src={Burger5} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Burger
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    SPICY JALAPEÑO BAJA
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    With guacamole, pepper jack, lettuce, tomato, onion, chipotle mayo on a spicy chipotle bun.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    150 UAH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button onClick={decreaseItem}>-</Button>
                                    <span className='count'>{clicks}</span>
                                    <Button onClick={incrementItem}>+</Button>
                                </ButtonGroup>
                                <Button variant='contained' color='secondary'>
                                    Order
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Fade>

                <Fade delay={600} className='fade-pizza'>
                    <img src={Burger6} alt='Pizza' className='pizza-img' />
                    <div>
                        <Card className={classes.root} variant='outlined'>
                            <CardContent>
                                <Typography
                                    className={classes.title}
                                    color='textSecondary'
                                    gutterBottom
                                >
                                    Burger
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    TRUFFLE MUSHROOM SWISS
                                </Typography>
                                <Typography
                                    className={classes.pos}
                                    color='textSecondary'
                                >
                                    With sautéed crimini mushrooms, truffle mayo on a classic bun.
                                </Typography>
                                <Typography variant='body2' component='p'>
                                    160 UAH
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <ButtonGroup
                                    disableElevation
                                    variant='contained'
                                    color='secondary'
                                >
                                    <Button onClick={decreaseItem}>-</Button>
                                    <span className='count'>{clicks}</span>
                                    <Button onClick={incrementItem}>+</Button>
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

