import React from 'react';
import {connect} from 'react-redux';

function Donations() {
    return (
        <div className="home-page">
            Donations
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Donations);