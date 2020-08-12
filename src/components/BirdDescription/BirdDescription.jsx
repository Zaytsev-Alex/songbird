import React from 'react';
import PropTypes from 'prop-types';

import './BirdDescription.scss';
import Player from '../Player/Player';

const BirdDescription = ({ data }) => {
    return (
        <div className="bird-description" key={data.id}>
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
    }).isRequired
}

export default BirdDescription;
