import React from 'react';
import PropTypes from 'prop-types';
// import Plyr from 'plyr';

import './Player.scss';

const Player = ({ src }) => {
    console.log(src)
    
    // const player = new Plyr('.audio');
    // console.log(player)
    return (
        <div className="audio-container">
            { /* eslint-disable-next-line */ }
            <audio className="audio" controls src="" />
        </div>
    );
}

Player.propTypes = {
    src: PropTypes.string.isRequired
}

export default Player;
