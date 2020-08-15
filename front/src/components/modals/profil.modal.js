import React, { useState, useEffect } from "react";
import ProfilDataService from '../../services/ProfilService'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const ModalProfil = props => {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            marginBottom: 10,
            // backgroundColor: 'green'
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const initialStateProfil = {
        id: null,
        libelle: "",
        temps: "",
        variation: "",
        actif_profil: [],
        conseil_profil: [],
        description: ""
    };

    const [profil, setProfil] = useState(initialStateProfil);
    const [allProfils, setAllProfils] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        getProfil()
        getAllProfil()
    }, [])

    const getProfil = () => {
        ProfilDataService.getById(props.ResultatProfil)
            .then(response => {
                setProfil({
                    id: response.data.id,
                    libelle: response.data.libelle,
                    temps: response.data.temps,
                    variation: response.data.variation,
                    actif_profil: response.data.actif_profil,
                    description: response.data.description
                });
            })
            .catch(e => {
                console.log(e)
            })
    }

    const getAllProfil = () => {
        ProfilDataService.getAll()
            .then(response => {
                setAllProfils(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <div>
            <div>
                Vos réponses permettent de déterminer que vous pouvez opter pour un niveau de risque
            </div>
            {allProfils.map((p, key) => {
                return (
                    <Card key={key} className={classes.root} style={{ backgroundColor: (p.libelle === profil.libelle) ? 'LightGreen' : null }}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {p.libelle}
                            </Typography>

                            <Typography variant="body2" component="p">
                                Variation moyenne annuelle cible : {p.variation}
                                <br />
                                Temps à y consacrer (Sauf gestion déléguée) : {p.temps}
                                {profil.libelle === "Trader" && p.libelle === "Trader" ?
                                    (<div>
                                        <br />
                                        <p>Vos réponses permettent de déterminer qu'en plus de votre profil d'investisseur vous pouvez envisager le profil Trader</p>
                                    </div>) :
                                    (null)}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}

        </div>
    );
};

export default ModalProfil;
