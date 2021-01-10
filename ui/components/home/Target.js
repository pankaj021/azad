import React from 'react';
import {connect} from 'react-redux';

function Target() {
    return (
        <div className="home-page">
            Target
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Target);