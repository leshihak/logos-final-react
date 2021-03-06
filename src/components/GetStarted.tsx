import React, { useState } from 'react';
import Logo from '../logo.png';
import Sushi from '../images/sushi.jpeg';
import Burgers from '../images/burgers.jpg';
import Wine from '../images/wine.jpg';
import Pizza from '../images/pizza.jpg';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FoodModal from './FoodModal';

const GetStarted = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div className='getStartedBlock'>
            <div className='getStartedHeader'>
                <img src={Logo} alt='website logo' className='logo' />
                <Link to='/signin' className='getStartedHeaderLink'>
                    {'Sign In'}
                </Link>
            </div>

            <Carousel slidesPerPage={2} arrows infinite>
                <div>
                    <img
                        src={Pizza}
                        alt='Pizza'
                        className='getstart-food-img '
                    />
                    <div className='getstart-food-details'>
                        <h2>Pizza</h2>
                        <Button
                            variant='outlined'
                            color='secondary'
                            onClick={handleShowModal}
                        >
                            Details
                        </Button>
                    </div>
                </div>
                <div>
                    <img
                        src={Sushi}
                        alt='Sushi'
                        className='getstart-food-img '
                    />
                    <div className='getstart-food-details'>
                        <h2>Sushi</h2>
                        <Button
                            variant='outlined'
                            color='secondary'
                            onClick={handleShowModal}
                        >
                            Details
                        </Button>
                    </div>
                </div>
                <div>
                    <img
                        src={Burgers}
                        alt='Burgers'
                        className='getstart-food-img '
                    />
                    <div className='getstart-food-details'>
                        <h2>Burgers</h2>
                        <Button
                            variant='outlined'
                            color='secondary'
                            onClick={handleShowModal}
                        >
                            Details
                        </Button>
                    </div>
                </div>
                <div>
                    <img src={Wine} alt='Wine' className='getstart-food-img ' />
                    <div className='getstart-food-details'>
                        <h2>Wine</h2>
                        <Button
                            variant='outlined'
                            color='secondary'
                            onClick={handleShowModal}
                        >
                            Details
                        </Button>
                    </div>
                </div>
            </Carousel>

            {showModal ? (
                <FoodModal
                    handleCloseModal={handleCloseModal}
                    showModal={showModal}
                />
            ) : null}

            <Link className='getStartedHeaderLink' to='/signup'>
                {'Sign Up'}
            </Link>
        </div>
    );
};

export default GetStarted;
