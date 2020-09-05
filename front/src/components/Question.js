import React, { useState, useEffect } from "react";
import Proposition from "./Proposition";
import { useSelector, useDispatch } from "react-redux";
import "./Question.css"
import { decrementPointProfil, decrementReponse, setIsMinor, profilPrudentAuto, profilTraderAuto } from '../actions/profilAction'
import { decrementPointGestion, decrementReponseGestion } from "../actions/gestionAction";
import { setSelectedProposition } from '../actions/supportAction';
import { removeLastAnswer } from '../actions/propositionAction'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Question = props => {

  const dispatch = useDispatch();
  const initialQuestionState = {
    id: props.listQuestion[0].id,
    libelle: props.listQuestion[0].libelle
  };
  const [currentQuestion, setCurrentQuestion] = useState(initialQuestionState);
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [pourcentageBar, setPourcentageBar] = useState(0)



  const { answersList } = useSelector((state) => ({
    answersList: state.proposition.answersList
  })
  );

  useEffect(() =>
    setCurrentQuestion(props.listQuestion[indexQuestion], [indexQuestion])
  )

  const nextQuestion = () => {
    setIndexQuestion(indexQuestion + 1)
  }

  const previousQuestion = () => {
    if (answersList) {
      reversePreviousAnswer()
    }
    setIndexQuestion(indexQuestion - 1)
  }


  const reversePreviousAnswer = () => {
    const anwserToRemove = answersList[answersList.length - 1]
    Object.entries(anwserToRemove).map(([key, value]) => {
      if (key === "setIsMinor") {
        value === true ? dispatch(setIsMinor(false)) : dispatch(null)
      }
      if (key === "profilPrudentAuto") {
        value === true ? dispatch(profilPrudentAuto(false)) : dispatch(null)
      }
      if (key === "profilTraderAuto") {
        value === true ? dispatch(profilTraderAuto(false)) : dispatch(null)
      }
      if (key === "incrementPointProfil") {
        dispatch(decrementPointProfil(value))
        dispatch(decrementReponse())
      }
      if (key === "incrementPointGestion") {
        dispatch(decrementPointGestion(value))
        dispatch(decrementReponseGestion())
      }
      if (key === "setSelectedProposition") {
        dispatch(setSelectedProposition(0))
      }
      dispatch(removeLastAnswer())
    })

  }

  useEffect(() => {
    setPourcentageBar(progressPercent)
  }, [indexQuestion])

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
          setIndexHandler={nextQuestion}
          idQuestion={currentQuestion.id}
        />
        <br />
        {indexQuestion > 0 ? 
        (<FontAwesomeIcon icon={faArrowLeft}
          onClick={previousQuestion}
          id="arrowLeft" />) : 
          null}
      </div>
    );
  }


};

export default Question;
