import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './Player.scss';

const Player = ({ src }) => {
    return (
        <div className="audio-container">
            <AudioPlayer
                className="audio"
                src={src}
                showJumpControls={false}
                autoPlayAfterSrcChange={false}
                customAdditionalControls={[]}
            />
        </div>
    );
}

Player.propTypes = {
    src: PropTypes.string.isRequired
}

export default Player;
