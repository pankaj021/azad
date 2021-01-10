import React from 'react';
import {connect} from 'react-redux';

function Teacher() {
    return (
        <div className="home-page">
            Teacher
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);