import React from 'react';
import PropTypes from 'prop-types';

import './NextLevel.scss';

const NextLevel = ({ guess, showNextLevel, current }) => {
    let value = 'Next Level';
    if (current === 5) {
        value = 'Result';
    }
    return (
        <input className="next-level" type="button" disabled={!guess} value={value} onClick={showNextLevel} />
    );
}

NextLevel.propTypes = {
    guess: PropTypes.bool,
    showNextLevel: PropTypes.func.isRequired,
    current: PropTypes.number.isRequired
}

NextLevel.defaultProps = {
    guess: false
}

export default NextLevel;
