import React, { useState, useEffect } from "react";
import { For } from 'react-loops'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import ConseilDataService from '../../services/ConseilServices'

const ModalProfil = props => {

    const [allRegles, setAllRegles] = useState([])
    const [allTradersRegles, setAllTradersRegles] = useState([])
    const [activeOnglet, setActiveOnglet] = useState()
    const [modalShow, setModalShow] = useState(false)

    useEffect(() => {
        getAllRegles()
    }, [])

    const getOnglet = (onglet) => {
        setActiveOnglet(onglet)
    }

    const getAllRegles = () => {
        ConseilDataService.getAll()
            .then(response => {
                setAllRegles(response.data)
                console.log(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const truncate = (text) => {
        return text.length > 60 ? text.substring(0, 60) + "..." : text;
    }

    const MydModalWithGrid = props => {
        return (
            <Modal {...props}
                dialogClassName="modal-bloc"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {activeOnglet ? <p>{activeOnglet.libelle}</p> : <p>NADA</p>}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {activeOnglet ? <p>{activeOnglet.description}</p> : <p>NADA</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="btn-close">Fermer</Button>
                </Modal.Footer>
            </Modal>

        );
    }



    return (

        <div>
            <>
            <p>Voici les principales règles à connaître pour devenir un {props.ResultatProfil === 5 ? ("Trader") : ("Investisseur")} performant !</p>
                {props.ResultatProfil === 5 ?
                    (<For of={allRegles} as={onglet =>
                        <div style={{ width: '100%' }}>
                            <Button className="bloc-btn" onClick={() => {
                                setModalShow(true);
                                getOnglet(onglet)
                            }}>
                                {truncate(onglet.libelle)}
                            </Button>
                        </div>
                    } />) :
                    (<For of={allRegles.filter(regle => regle.id != 9 &&
                        regle.id != 10 && 
                        regle.id != 11 && 
                        regle.id != 12 && 
                        regle.id != 13 &&
                        regle.id != 14)} as={onglet =>
                        <div style={{ width: '100%' }}>
                            <Button className="bloc-btn" onClick={() => {
                                setModalShow(true);
                                getOnglet(onglet)
                            }}>
                                {truncate(onglet.libelle)}
                            </Button>
                        </div>
                    } />)}

                <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </>
        </div>
    );
};

export default ModalProfil;
