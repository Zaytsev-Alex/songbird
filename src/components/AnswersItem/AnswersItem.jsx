import React from 'react';
import PropTypes from 'prop-types';

import './AnswersItem.scss';

const AnswersItem = ({ data }) => {
    return (
        <li className="answers__item">
            <span className="answers__item_circle" />
            <span className="answers__item_title">{data.name}</span>
        </li>
    );
}

AnswersItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        species: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        audio: PropTypes.string
    }).isRequired,
}

export default AnswersItem;
