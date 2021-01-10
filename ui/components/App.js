import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import './App.css';
import LoginPage from './login/LoginPage';
import ContactPage from './contacts/ContactPage';
import {Error, Textarea, Accordion, AccordionCollapsed, AccordionExpanded} from './pattern-lib';

function App({user, error}) {
    return (
        <Accordion 
            isExpanded = {false}
        >
            <AccordionCollapsed title={'My goals'}><div>Collllllllllll</div></AccordionCollapsed>
            <AccordionExpanded><div>Exppsppppppppp</div></AccordionExpanded>
        </Accordion>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    error: state.error
})

export default connect(mapStateToProps, null)(App);