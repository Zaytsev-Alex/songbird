import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';

import birdsData from './data';

import Navigation from './components/Navigation/Navigation'
import Score from './components/Score/Score';
import CurrentLevel from './components/CurrentLevel/CurrentLevel';
import Answers from './components/Answers/Answers';
import BirdDescription from './components/BirdDescription/BirdDescription';

import './index.scss';
import NextLevel from './components/NextLevel/NextLevel';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

function App() {
  const placeholderImageSrc = './assets/images/image1.jpg';

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
        <CurrentLevel imageSrc={placeholderImageSrc} title="temporary" audioSrc="" />
        <div className="main-horizontal-container">
          <Answers data={birdsData[0]}/>
          <BirdDescription data={birdsData[0][1]}/>
        </div>
        <NextLevel />
      </main>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
