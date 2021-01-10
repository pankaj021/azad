import React from 'react';
import {connect} from 'react-redux';
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            HomePage
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);