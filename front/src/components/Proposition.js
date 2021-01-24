import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { For } from 'react-loops'
import PropositionDataService from '../services/PropositionService'
import { incrementPointProfil, incrementReponse, setIsMinor, profilPrudentAuto, profilTraderAuto } from '../actions/profilAction'
import { lastAnswer } from '../actions/propositionAction'
import "./Proposition.css"
import { incrementPointGestion, incrementReponseGestion } from "../actions/gestionAction";
import { setSelectedProposition } from '../actions/supportAction';


const Proposition = props => {
  const dispatch = useDispatch();

  const [listePropositions, setListePropositions] = useState();

  useEffect(() => getListPropositions(), [props.idQuestion])

  const getListPropositions = () => {
    PropositionDataService.getAllByIdQuestion(props.idQuestion)
      .then(response => {
        setListePropositions(response.data);
      })
      .catch(e => {
        console.log(e)
      })
  }

  const nextQuestion = (proposition) => {

    // GESTION DES REGLES SPECIALES POUR CERTAINES QUESTIONS
    if(proposition.id === 1) {
      dispatch(setIsMinor(true))
      dispatch(lastAnswer('setIsMinor', true))
    } 

    if(proposition.id === 42 || proposition.id === 78 || proposition.id === 51 || proposition.id === 9 || proposition.id === 13 ) {
      dispatch(profilPrudentAuto(true))
      dispatch(lastAnswer('profilPrudentAuto', true))
    }

    if(proposition.id === 16 || proposition.id === 17 || proposition.id === 46) {
      dispatch(profilTraderAuto(true))
      dispatch(lastAnswer('profilTraderAuto', true))
    }
    // FIN GESTION DES REGLES SPECIALES POUR CERTAINES QUESTIONS

    if (proposition.pointsProfil) {
      dispatch(incrementReponse())
      dispatch(incrementPointProfil(proposition.pointsProfil))
      dispatch(lastAnswer('incrementPointProfil', proposition.pointsProfil))
    }
    if (proposition.pointsTypeGestion) {
      dispatch(incrementReponseGestion())
      dispatch(incrementPointGestion(proposition.pointsTypeGestion))
      dispatch(lastAnswer('incrementPointGestion', proposition.pointsTypeGestion))
    }
    if (proposition.id === 38 || proposition.id === 39 || proposition.id === 40 || proposition.id === 41) {
      dispatch(setSelectedProposition(proposition.id))
      dispatch(lastAnswer('setSelectedProposition', proposition.id))
    }
    props.setIndexHandler()
  }


  return (

    <div className="list-group list-group-flush proposition-container " >
      <For of={listePropositions} as={proposition =>
        <div className="list-group-item proposition-card"
          onClick={(e) => nextQuestion(proposition)}
        >
          {proposition.libelle}
        </div>

      } />

    </div>
  );
};

export default Proposition;
