import React from 'react';
import PropTypes from 'prop-types';

import './Answers.scss';
import AnswersItem from '../AnswersItem/AnswersItem';

const Answers = ({ data }) => {
    return (
        <div className="answers-container">
            <ul className="answers">
                {data.map(element => <AnswersItem data={element} />)}
            </ul>
        </div>
    );
}

Answers.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Answers;
