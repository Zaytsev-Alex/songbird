import React from 'react';
import PropTypes from 'prop-types';

import './Score.scss';

const Score = ({ total }) => {
    return (
        <div className="score">
            <span className="score__title">Score: </span>
            <span className="score__current">{total}</span>
        </div>
    );
}

Score.propTypes = {
    total: PropTypes.number
}

Score.defaultProps = {
    total: 0
}

export default Score;
