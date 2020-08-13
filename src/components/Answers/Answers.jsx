import React from 'react';
import PropTypes from 'prop-types';

import './Answers.scss';
import AnswersItem from '../AnswersItem/AnswersItem';

const Answers = ({ data, checkAnswer }) => {
    return (
        <div className="answers-container">
            <ul className="answers">
                {data.map(element => <AnswersItem data={element} key={String(element.id)} checkAnswer={checkAnswer} /> )}
            </ul>
        </div>
    );
}

Answers.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    checkAnswer: PropTypes.func.isRequired
}

export default Answers;
