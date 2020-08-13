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
import answerItemStatus from './components/componentsStatus';

// import correctSound from './assets/audio/correct.mp3';
// import wrongSound from './assets/audio/error.mp3';

import './index.scss';

function App() {
  const placeholderImageSrc = './assets/images/image1.jpg';

  const [currentPage, setCurrentPage] = useState(0);

  const [birdsArray, setBirdsArray] = useState(shuffleArray(birdsData[currentPage]));
  const [usedIndexes, min, max] = [[], 0, 5];

  const [birdIndex, setBirdIndex] = useState(getRandomNumber(min, max, usedIndexes));

  const [guess, setGuess] = useState(false);

  usedIndexes.push(birdIndex);

  const checkAnswer = (event) => {
    let currentAnswer;
    const element = event.target;
    if (element.tagName === 'LI') {
      currentAnswer = element;
    } else if (element.tagName === 'SPAN') {
      currentAnswer = element.parentElement.parentElement;
    } else if (element.tagName === 'BUTTON') {
      currentAnswer = element.parentElement;
    } else {
      return null;
    }

    const currentAnswerTitle = currentAnswer.querySelector('.answers__item_title').textContent;
    const index = birdsArray.map(e => e.name).indexOf(currentAnswerTitle);

    if (birdsArray.map(e => e.status).indexOf(answerItemStatus.correct) === -1 && birdsArray[index].status === undefined) {
      if (currentAnswerTitle === birdsArray[birdIndex].name) {
        // new Audio(correctSound).play();
        birdsArray[index].status = answerItemStatus.correct;
        setGuess(true);
  
      } else {
        // new Audio(wrongSound).play();
        birdsArray[index].status = answerItemStatus.wrong;
      }

      setBirdsArray([...birdsArray]);
    }

    return currentAnswerTitle === birdsArray[birdIndex].name;
  }

  console.log(birdIndex)

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
        <CurrentLevel imageSrc={placeholderImageSrc} title="*******" audioSrc={birdsArray[birdIndex].audio} guess={guess} />
        <div className="main-horizontal-container">
          <Answers data={birdsArray} checkAnswer={checkAnswer} />
          <BirdDescription data={birdsArray[birdIndex]} />
        </div>
        <NextLevel guess={guess} />
      </main>
    </div>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
