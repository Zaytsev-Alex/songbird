import React from 'react';
import PropTypes from 'prop-types';

import './NextLevel.scss';

const NextLevel = ({ status }) => {
    return (
        <input className="next-level" type="button" disabled={!status} value='Next Level'/>
    );
}

NextLevel.propTypes = {
    status: PropTypes.bool
}

NextLevel.defaultProps = {
    status: false
}

export default NextLevel;
