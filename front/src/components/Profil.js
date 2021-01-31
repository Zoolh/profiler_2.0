import React, { useState } from "react";
import { For } from 'react-loops'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useSelector } from "react-redux";
import ProfilModal from "./modals/profil.modal";
import GestionModal from "./modals/gestion.modal";
import MarcheModal from "./modals/marche.modal";
import PlusLoinModal from "./modals/plusLoin.modal";
import ReglesModal from "./modals/regles.modal";
import SupportModal from "./modals/support.modal";
import './Profil.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Profil = props => {
    const [modalShow, setModalShow] = useState(false);
    const [activeOnglet, setActiveOnglet] = useState();

    const listeOnglets = [
        'Type de Gestion',
        'Profil risque gain',
        'Support d\'investissement',
        'Marchés & Produits',
        'Règles d\'Or',
        'Pour aller plus loin']

    const nbPointProfil = useSelector((state) => {
        return state.profil.point
    });
    const nbQuestionProfil = useSelector((state) => {
        return state.profil.nbReponses

    });

    const isProfilPrudentAuto = useSelector((state) => {
        return state.profil.isProfilPrudentAuto
    });

    let ResultatProfil = 0;
    if (isProfilPrudentAuto) {
        ResultatProfil = 1;
    } else {
        ResultatProfil = Number((nbPointProfil / nbQuestionProfil).toFixed(0));
    }


    const nbPointGestion = useSelector((state) => {
        return state.gestion.point
    });

    const nbQuestionGestion = useSelector((state) => {
        return state.gestion.nbReponses
    });

    const ResultatGestion = Number((nbPointGestion / nbQuestionGestion).toFixed(0));

    const IdPropositionSupport = useSelector((state) => {
        return state.support.propositionSelected
    })

    const getOnglet = (onglet) => {
        setActiveOnglet(onglet)
    }


    const MydModalWithGrid = props => {
        return (
            <Modal {...props}
                dialogClassName="modal-bloc"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {activeOnglet ? <p>{activeOnglet}</p> : <p>NADA</p>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {activeOnglet === "Type de Gestion" ? <GestionModal ResultatGestion={ResultatGestion} /> : null}
                    {activeOnglet === "Profil risque gain" ? <ProfilModal ResultatProfil={ResultatProfil} /> : null}
                    {activeOnglet === "Support d'investissement" ? <SupportModal IdPropositionSupport={IdPropositionSupport} /> : null}
                    {activeOnglet === "Marchés & Produits" ? <MarcheModal ResultatProfil={ResultatProfil} /> : null}
                    {activeOnglet === "Règles d'Or" ? <ReglesModal ResultatProfil={ResultatProfil} /> : null}
                    {activeOnglet === "Pour aller plus loin" ? <PlusLoinModal /> : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="btn-close">Fermer</Button>
                </Modal.Footer>
            </Modal>

        );
    }


    return (
        <div>
            <div id="result-div">
                <h1>RESULTATS</h1>
                <>
                    <For of={listeOnglets} as={onglet =>
                        <div className="resultCard">
                            <Button className="bloc-btn" onClick={() => {
                                setModalShow(true);
                                getOnglet(onglet)
                            }}>
                                {onglet}
                            </Button>
                        </div>
                    } />
                    <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                </>
            </div>
            <br />
            <div id="home-div">
                <FontAwesomeIcon icon={faHome}
                    size='3x'
                    className="home-btn"
                    onClick={() => { window.location.reload(false) }}
                />
            </div>
        </div>
    );
};

export default Profil;