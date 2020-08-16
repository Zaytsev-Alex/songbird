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
import Result from './components/Result/Result';

import getRandomNumber from './getRandomNumber';
import shuffleArray from './shuffleArray';
import answerItemStatus from './components/componentsStatus';

import './index.scss';

function SongBird() {
  const [currentPage, setCurrentPage] = useState(0);

  const [birdsArray, setBirdsArray] = useState(shuffleArray(birdsData[currentPage]));
  const [min, max] = [0, 5];

  const [birdIndex, setBirdIndex] = useState(getRandomNumber(min, max));

  const [guess, setGuess] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const [score, setScore] = useState(0);
  const [currentStrickScore, setCurrentStrickScore] = useState(5);

  console.log(`Раунд ${currentPage}: правильный ответ - ${birdsArray[birdIndex].name}`)

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

    setSelectedIndex(index);

    if (birdsArray.map(e => e.status).indexOf(answerItemStatus.correct) === -1 && birdsArray[index].status === undefined) {
      if (currentAnswerTitle === birdsArray[birdIndex].name) {
        document.querySelectorAll('audio').forEach(e => e.pause());
        const correctSound = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3';
        new Audio(correctSound).play();
        birdsArray[index].status = answerItemStatus.correct;
        setScore(score + currentStrickScore);
        setGuess(true);
  
      } else {
        const wrongSound = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';
        new Audio(wrongSound).play();
        birdsArray[index].status = answerItemStatus.wrong;
        setCurrentStrickScore(currentStrickScore - 1);
      }

      setBirdsArray([...birdsArray]);
    }

    return currentAnswerTitle === birdsArray[birdIndex].name;
  }

  const showNextLevel = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 !== 6) {
      setBirdsArray(shuffleArray(birdsData[currentPage + 1]));
      setBirdIndex(getRandomNumber(min, max));
      setGuess(false);
      setSelectedIndex(-1);
      setCurrentStrickScore(5);
    }
  }

  const repeatGame = () => {
    setCurrentPage(0);
    setBirdsArray(shuffleArray(birdsData[0]));
    setBirdIndex(getRandomNumber(min, max));
    setGuess(false);
    setSelectedIndex(-1);
    setCurrentStrickScore(5);
    setScore(0);

    birdsData.forEach(element => element.forEach((e) => {
        delete e.status;
      })
    )
  }

  if (currentPage !== 6) {
    return (
      <div className="container">
        <header>
          <div className="header__upper">
            <h1 className="logo">
              <span className="logo__left">Song</span>
              <span className="logo__right">Bird</span>
            </h1>
            <Score total={score}/>
          </div>
          <Navigation current={currentPage} />
        </header>
        <main>
          <CurrentLevel imageSrc={birdsArray[birdIndex].image} title={birdsArray[birdIndex].name} audioSrc={birdsArray[birdIndex].audio} guess={guess} />
          <div className="main-horizontal-container">
            <Answers data={birdsArray} checkAnswer={checkAnswer} />
            <BirdDescription data={selectedIndex >= 0 ? birdsArray[selectedIndex] : undefined} index={selectedIndex} />
          </div>
          <NextLevel guess={guess} showNextLevel={showNextLevel} current={currentPage} />
        </main>
      </div>
    );
  }
  return (
    <div className="container">
      <Result score={score} showNextLevel={repeatGame}/>
    </div>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<SongBird />, root);