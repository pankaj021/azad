import React from 'react';
import {connect} from 'react-redux';
import './HomePage.css'

function Header() {
    return (
        <header>
            <div className="logo-section">
                <img className='user-logo' src='/icons/logo2.jpg' alt='Azad'/>
                <div className='h-other'>
                    <h3>Azaad School</h3>
                    <h4>Pankaj Maurya</h4>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Header);