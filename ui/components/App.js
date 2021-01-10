import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import './App.css';
import LoginPage from './login/LoginPage';
import ContactPage from './contacts/ContactPage';
import Header from './home/Header';
import Body from './home/Body';
import {Error, Textarea, Accordion, AccordionCollapsed, AccordionExpanded} from './pattern-lib';

function App({user, error}) {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
})

export default connect(mapStateToProps, null)(App);