import React, { useState, useEffect } from "react";
import GestionDataService from '../../services/TypeGestionServices'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const ModalProfil = props => {

    const initialTypeGestion = {
        id: null,
        libelle: "",
        description: ""
    }

    const [typeGestion, setTypeGestion] = useState(initialTypeGestion)
    const [allTypesGestion, setAllTypesGestion] = useState([])

    const getAllTypesGestion = () => {
        GestionDataService.getAll()
            .then(response => {
                setAllTypesGestion(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const getTypeGestion = () => {
        GestionDataService.getById(props.ResultatGestion)
        .then(response => {
            setTypeGestion({
                id: response.data.id,
                libelle: response.data.libelle,
                description: response.data.description
            });
        })
        .catch(e => {
            console.log(e)
        })
    }

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

    const classes = useStyles();

    useEffect(() => {
        getAllTypesGestion()
        getTypeGestion()
    }, [])

    return (

        <div>
            <div>
            Vos réponses permettent de déterminer que vous pouvez opter pour une gestion
            </div>
            {allTypesGestion.map((g, key) => {
                return (
                    <Card key={key} className={classes.root} style={{ backgroundColor: (g.libelle === typeGestion.libelle) ? 'LightBlue' : null }}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {g.libelle}
                            </Typography>

                            <Typography variant="body2" component="p">
                                {g.description}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}

        </div>
    );
};

export default ModalProfil;
