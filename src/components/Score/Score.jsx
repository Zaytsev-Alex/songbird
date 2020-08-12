import React from 'react';
import PropTypes from 'prop-types';

import './Score.scss';

const Score = ({ score }) => {
    return (
        <div className="score">
            <span className="score__title">Score: </span>
            <span className="score__current">{score}</span>
        </div>
    );
}

Score.propTypes = {
    score: PropTypes.number
}

Score.defaultProps = {
    score: 0
}

export default Score;
