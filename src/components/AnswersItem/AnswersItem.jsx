import React from 'react';
import PropTypes from 'prop-types';

import './AnswersItem.scss';
import answerItemStatus from '../componentsStatus';

const AnswersItem = ({ data, checkAnswer }) => {
    const circleClassName = ['answers__item_circle'];
    if (data.status && data.status === answerItemStatus.wrong) {
        circleClassName.push('answers__item_wrong');
    } else if (data.status && data.status === answerItemStatus.correct) {
        circleClassName.push('answers__item_correct');
    }
    return (
        <li className="answers__item">
            <button type="submit" className="answers__item-button" onClick={checkAnswer}>
                <span className={circleClassName.join(' ')} />
                <span className="answers__item_title">{data.name}</span>
            </button>
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
        audio: PropTypes.string,
        status: PropTypes.string
    }).isRequired,
    checkAnswer: PropTypes.func.isRequired
}

export default AnswersItem;
