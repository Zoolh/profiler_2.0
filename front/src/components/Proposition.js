import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { For } from 'react-loops'
import PropositionDataService from '../services/PropositionService'
import { incrementPointProfil, incrementReponse } from '../actions/profilAction'
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
    if (proposition.pointsProfil) {
      dispatch(incrementReponse())
      dispatch(incrementPointProfil(proposition.pointsProfil))
    }
    if (proposition.pointsTypeGestion) {
      dispatch(incrementReponseGestion())
      dispatch(incrementPointGestion(proposition.pointsTypeGestion))
    }
    if (proposition.id == 38 || proposition.id == 39 || proposition.id == 40 || proposition.id == 41) {
      dispatch(setSelectedProposition(proposition.id))
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
