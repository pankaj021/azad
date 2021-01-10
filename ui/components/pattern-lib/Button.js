import React from 'react';
import {connect} from 'react-redux';

function Button() {
    return (
        <div className="Button">
            Button
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Button);