import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Burgers() {
    return (
        <>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/pizzaFolks' className='getStartedHeaderLink'>
                    {'Back to Pizza Folks'}
                </Link>
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
