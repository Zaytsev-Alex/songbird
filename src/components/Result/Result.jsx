import React from 'react';
import PropTypes from 'prop-types';

import './Result.scss';
import NextLevel from '../NextLevel/NextLevel';

const Result = ({ score, showNextLevel }) => {
    const maxScore = 30;
    let resultDescription;
    if (score !== maxScore) {
        resultDescription = `Вы прошли викторину и набрали ${score} из ${maxScore} возможных баллов!`;
    } else {
        resultDescription = `Вы абсолютный знаток птиц! Вы набрали максимально возможный балл.`;
    }
    return (
        <div className="result">
            <h2 className="result__header">Поздравляем!</h2>
            <p className="result__description">{resultDescription}</p>
            { /* eslint-disable-next-line */ }
            {score !== maxScore ? <NextLevel showNextLevel={showNextLevel} guess={true} current={-1} /> : null}
        </div>
    );
}

Result.propTypes = {
    score: PropTypes.number.isRequired,
    showNextLevel: PropTypes.func.isRequired
}

export default Result;
