import React from 'react';
import Logo from '../logo.png';
import Sushi from '../images/sushi.jpeg';
import Burgers from '../images/burgers.jpg';
import Wine from '../images/wine.jpg';
import Pizza from '../images/pizza.jpg';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function ChooseFoodPage() {
    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/' className='getStartedHeaderLink'>
                    {'Back to Home Page'}
                </Link>
            </div>

            <h1 className='chooseFoodPage-title'>Choose what do you want...</h1>

            <div className='chooseFoodPage-icons'>
                <Fade className='fade'>
                    <p>Pizza...</p>
                    <img
                        src={Pizza}
                        alt='Pizza'
                        className='chooseFoodPage-img'
                    />
                    <Link to='/pizza' className='chooseFoodLink'>
                        {'Choose Pizza'}
                    </Link>
                </Fade>
                <Fade delay={1000} className='fade'>
                    <p>...or Sushi...</p>
                    <img
                        src={Sushi}
                        alt='Sushi'
                        className='chooseFoodPage-img'
                    />
                    <Link to='/sushi' className='chooseFoodLink'>
                        {'Choose Sushi'}
                    </Link>
                </Fade>
                <Fade delay={2000} className='fade'>
                    <p>...or may be some Burgers?</p>
                    <img
                        src={Burgers}
                        alt='Burgers'
                        className='chooseFoodPage-img'
                    />
                    <Link to='/burgers' className='chooseFoodLink'>
                        {'Choose Burgers'}
                    </Link>
                </Fade>
                <Fade delay={3000} className='fade'>
                    <p>...and finally Wine!</p>
                    <img src={Wine} alt='Wine' className='chooseFoodPage-img' />
                    <Link to='/wine' className='chooseFoodLink'>
                        {'Choose Wine'}
                    </Link>
                </Fade>
                <Fade delay={4000}>
                    <h2 className='chooseFoodPage-title'>
                        So what will you choose?
                    </h2>
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
