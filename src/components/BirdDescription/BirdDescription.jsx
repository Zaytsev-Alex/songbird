import React from 'react';
import PropTypes from 'prop-types';

import './BirdDescription.scss';
import Player from '../Player/Player';

const BirdDescription = ({ data, index }) => {
    if (index === -1) {
        return (
            <div className="bird-description">
                <h2>Послушайте плеер и выберите ту птицу, которая издает этот звук</h2>
            </div>
        );
    }
    return (
        <div className="bird-description">
            <div className="bird-description__top">
                <div className="bird-description__image">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="bird-description__short">
                    <h3 className="bird-description__title">
                        {data.name}
                    </h3>
                    <h4 className="bird-description__species">
                        {data.species}
                    </h4>
                    <Player src={data.audio}/>
                </div>
            </div>
            <div className="bird-description__bottom">
                <p className="bird-description__full">
                    {data.description}
                </p>
            </div>
        </div>
    );
}

BirdDescription.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        species: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        audio: PropTypes.string
    }),
    index: PropTypes.number.isRequired
}

BirdDescription.defaultProps = {
    data: undefined
}

export default BirdDescription;
