import React from 'react';
import PropTypes from 'prop-types';
import Player from '../Player/Player';
import placeholderImage from '../../assets/images/placeholder.svg';

import './CurrentLevel.scss';

const CurrentLevel = ({imageSrc, title, audioSrc, guess}) => {
    return (
        <div className="current-level">
            <div className="current-level__image-container">
                <img className="current-level__image" src={guess ? imageSrc : placeholderImage} alt="" />
            </div>
            <div className="current-level__container">
                <h2 className="current-level__title">{guess ? title : "*******"}</h2>
                <Player src={audioSrc} />
            </div>
        </div>
    );
}

CurrentLevel.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    audioSrc: PropTypes.string.isRequired,
    guess: PropTypes.bool
}

CurrentLevel.defaultProps = {
    guess: false
}

export default CurrentLevel;
