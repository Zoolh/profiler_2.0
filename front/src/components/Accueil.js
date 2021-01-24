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
               
                <br /><br />
                <span>Répondez le plus naturellement à ces questions afin de déterminer VOTRE PROFIL ! 
            </span> <br /><br />
                <button className="btn btn-start"
                    onClick={getListQuestions}
                >
                    Commencer le questionnaire
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
