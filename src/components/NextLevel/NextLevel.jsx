import React from 'react';
import PropTypes from 'prop-types';

import './NextLevel.scss';

const NextLevel = ({ guess, showNextLevel }) => {
    return (
        <input className="next-level" type="button" disabled={!guess} value='Next Level' onClick={showNextLevel} />
    );
}

NextLevel.propTypes = {
    guess: PropTypes.bool,
    showNextLevel: PropTypes.func.isRequired
}

NextLevel.defaultProps = {
    guess: false
}

export default NextLevel;
