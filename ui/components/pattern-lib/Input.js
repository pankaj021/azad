import React from 'react';
import {connect} from 'react-redux';

function Input() {
    return (
        <div className="Input">
            Input
        </div>
    )
}

const mapStateToProps = null;
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Input);