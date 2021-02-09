import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Users from './Users';
import Home from './Home';


function App () {
    return (
        <BrowserRouter>
            <div className="page">
                <ul className="navigation">
                    <li className="navigation__item"><Link to="/">Home</Link></li>
                    <li className="navigation__item"><Link to="/users">Users</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route exact path="/users" component={Users}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;