import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import LoginScreen from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function AppRouter() {

    const dispatch = useDispatch();
    const { checking, _id } = useSelector( state => state.auth);
    
    const authenticated = !!_id;

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch])

    if ( checking ) {
        return ( <h3>Checking...</h3> )
    }
    console.log(process.env);
    console.log(process.env.PUBLIC_URL);
    return (
        <Router basename="/events-calendar-react">
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={authenticated} />
                    <PrivateRoute exact path="/" component={CalendarScreen} isAuthenticated={authenticated} />
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}
