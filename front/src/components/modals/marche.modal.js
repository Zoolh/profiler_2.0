import React, { useState, useEffect } from "react";
import ActifsDataService from '../../services/ActifServices'
import ProfilDataService from '../../services/ProfilService'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ModalProfil = props => {

    // const [allActifs, setAllActifs] = useState([])
    const [actifSelected, setActifSelected] = useState([])
    const [allProfils, setAllProfils] = useState([]);

    useEffect(() => {
        getActifSelected()
        getAllProfil()
    }, [])

    const getAllProfil = () => {
        ProfilDataService.getAll()
            .then(response => {
                setAllProfils(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }

    const getActifSelected = () => {
        ActifsDataService.getByProfilId(props.ResultatProfil)
            .then(response => {
                setActifSelected(response.data)
                // console.log(response.data)
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


    return (
        <div>
            <div>
                Vos réponses permettent de déterminer que vous pouvez investir sur les marchés et produits suivants
            </div>
            {allProfils.map((p, key) => {
                return (
                    <Card key={key} className={classes.root} style={{ backgroundColor: (p.id === props.ResultatProfil) ? 'LightBlue' : null }}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {p.libelle}
                            </Typography>

                            {p.id === props.ResultatProfil ?

                                (<div>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Types d'Actifs</TableCell>
                                                    <TableCell align="left">Pondération</TableCell>
                                                    <TableCell align="left">Produits</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {actifSelected.map((a, key) => (
                                                    <TableRow key={key}>
                                                        <TableCell component="th" scope="row">
                                                            {a.libelle}
                                                        </TableCell>
                                                        <TableCell align="left">{a.ponderation}</TableCell>
                                                        <TableCell align="left">{a.produit_actif.map((p, key) => {
                                                            return(
                                                                <div key={key}>{p.libelle}</div>
                                                            )
                                                        })}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>) :
                                (null)}

                        </CardContent>
                    </Card>
                )
            })}

        </div>
    );
};

export default ModalProfil;
