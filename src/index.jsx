import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import birdsData from './data';

import Navigation from './components/Navigation/Navigation'
import Score from './components/Score/Score';
import CurrentLevel from './components/CurrentLevel/CurrentLevel';
import Answers from './components/Answers/Answers';
import BirdDescription from './components/BirdDescription/BirdDescription';
import NextLevel from './components/NextLevel/NextLevel';

import getRandomNumber from './getRandomNumber';
import shuffleArray from './shuffleArray';

import './index.scss';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

function App() {
  const placeholderImageSrc = './assets/images/image1.jpg';

  const [currentPage, setCurrentPage] = useState(0);

  const birdsArray = shuffleArray(birdsData[currentPage]);
  const [usedIndexes, min, max] = [[], 0, 5];

  const birdIndex = getRandomNumber(min, max, usedIndexes);
  usedIndexes.push(birdIndex);

  return (
    <div className="container">
      <header>
        <div className="header__upper">
          <h1 className="logo">
            <span className="logo__left">Song</span>
            <span className="logo__right">Bird</span>
          </h1>
          <Score />
        </div>
        <Navigation />
      </header>
      <main>
        <CurrentLevel imageSrc={placeholderImageSrc} title="*******" audioSrc={birdsArray[birdIndex].audio} />
        <div className="main-horizontal-container">
          <Answers data={birdsArray}/>
          <BirdDescription data={birdsArray[birdIndex]}/>
        </div>
        <NextLevel />
      </main>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
