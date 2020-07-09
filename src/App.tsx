import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404';
import GetStarted from './components/GetStarted';
import SignUp from './components/SignUp';
import SignIn from './components/LogIn';
import ChooseFoodPage from './components/ChooseFoodPage';
import Wine from './components/selection/Wine';
import About from './components/About';
import Contact from './components/Contact';
import Burgers from './components/selection/Burgers';
import Sushi from './components/selection/Sushi';
import Pizza from './components/selection/Pizza';
import Cart from './components/purchase/Cart';
import Address from './components/purchase/Address';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={GetStarted} exact />
                <Route path='/signUp' component={SignUp} />
                <Route path='/signIn' component={SignIn} />
                <Route path='/pizzafolks' component={ChooseFoodPage} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/wine' component={Wine} />
                <Route path='/burgers' component={Burgers} />
                <Route path='/sushi' component={Sushi} />
                <Route path='/pizza' component={Pizza} />
                <Route path='/cart' component={Cart} />
                <Route path='/address' component={Address} />
                <Route path='' component={Page404} />
                <Route path='*' component={Page404} />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
