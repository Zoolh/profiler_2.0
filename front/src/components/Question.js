import React, { useState, useEffect } from "react";
import Proposition from "./Proposition";
import { useSelector } from "react-redux";
import "./Question.css"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Question = props => {

  const initialQuestionState = {
    id: props.listQuestion[0].id,
    libelle: props.listQuestion[0].libelle
  };
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestionState);
  // const [indexQuestion, setIndexQuestion] = useState(19);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [pourcentageBar, setPourcentageBar] = useState(0)

  useEffect(() =>
    setCurrentQuestion(props.listQuestion[indexQuestion], [indexQuestion])
  )

  const setIndex = () => {
    setPourcentageBar(progressPercent)
    setIndexQuestion(indexQuestion + 1)
  }

  const backPreviousIndex = () => {
    setPourcentageBar(progressPercent)
    setIndexQuestion(indexQuestion - 1)
  }

  const displayProfil = () => {
    props.displayProfil();
  }

  const progressPercent = ((indexQuestion + 1) * 100) / (props.listQuestion.length - 1)


  if (!currentQuestion) {
    return (
      <div>
        {displayProfil()}
      </div>
    )
  }

  if (currentQuestion) {

    return (
      <div className="question-container">
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: pourcentageBar + '%' }}>
            Question {indexQuestion + 1} sur {props.listQuestion.length}
          </div>
        </div>
        <h3 className="titre-question">{currentQuestion.libelle}</h3>
        <div className="indexQuestion"></div>
        <Proposition
          setIndexHandler={setIndex}
          idQuestion={currentQuestion.id}
        />
        <br />
        <FontAwesomeIcon icon={faArrowLeft}
          onClick={backPreviousIndex} />
      </div>
    );
  }


};

export default Question;
