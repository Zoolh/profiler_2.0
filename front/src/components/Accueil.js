import React, { useState } from "react";
import './Accueil.css'
import QuestionDataService from "../services/QuestionService"
import Question from "../components/Question"
import Profil from "../components/Profil"

const Accueil = props => {


    const [listQuestions, setListQuestions] = useState();
    const [target, setTarget] = useState("accueil");

    const getListQuestions = () => {
        QuestionDataService.getAll()
            .then(response => {
                setListQuestions(response.data);
                setTarget("questionnaire")
            })
            .catch(e => {
                console.log(e)
            })
    }

    const displayProfil = () => {
        setTarget("profil")
    }


    if (target === "profil") {
        return (
            <Profil />
        )
    }

    if (target === "accueil") {
        return (
            <div className="div-accueil">
                <h1>Déterminez votre profil boursier</h1>
                <span>
                    L'un des critères fondamentaux consiste à déterminer si vous êtes Investisseur, Trader ou les 2.<br />
                    La confusion entre ces deux profils conduit fréquemment à l'échec et à des contre-performances.
                </span>
                <br />
                <span>En répondant le plus naturellement possible à ces questions, vous pourrez déterminer votre profil d'investisseur
                  et savoir ce qui vous correspond le mieux sur les marchés actuels.
            </span> <br /><br />
                <button className="btn btn-start"
                    onClick={getListQuestions}
                >
                    Démarrer le questionnaire
              </button>
            </div>
        )
    }

    if (target === "questionnaire") {
        return (
            <Question
                listQuestion={listQuestions}
                displayProfil={displayProfil} />
        )
    }



};



export default Accueil;
