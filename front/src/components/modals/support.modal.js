import React, { useState, useEffect } from "react";
import SupportDataService from '../../services/SupportInvServices'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const ModalProfil = props => {

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            marginBottom: 10,
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

    const [listeSupports, setListeSupports] = useState([])
    const [allSupports, setAllSupports] = useState([])

    useEffect(() => {
        getAllSupports()
    }, [])


    const getAllSupports = () => {
        SupportDataService.getAll()
            .then(response => {
                setAllSupports(response.data)

                let listeTemp = []
                // 1 = Prudent;
                if(props.ResultatProfil === 1) {
                    listeTemp = response.data.filter(support => support.id === 2 || support.id === 3);
                }
                // 2 = Equilibré
                if(props.ResultatProfil === 2) {
                    listeTemp = response.data.filter(support => support.id === 1 || support.id === 2 || support.id === 3 || support.id === 4);
                }
                // 3 = Dynamique
                if(props.ResultatProfil === 3) {
                    listeTemp = response.data.filter(support => support.id === 1 || support.id === 2 || support.id === 3 || support.id === 4 || support.id === 5);
                }
                // 4 = Offensif
                if(props.ResultatProfil === 4) {
                    listeTemp = response.data.filter(support => support.id === 1 || support.id === 2 || support.id === 5);
                }
                // 5 = Trader
                if(props.ResultatProfil === 5) {
                    listeTemp = response.data.filter(support => support.id === 1 || support.id === 2 || support.id === 5);
                }
                setListeSupports(listeTemp)


            })
            .catch(e => {
                console.log(e)
            })
    }


    return (

        <div>
            <div>
                Vos réponses permettent de déterminer que les supports d'investissement qui vous correspondent sont
        </div>
            {allSupports.map((s, key) => {
                var equals = listeSupports.some(el => el.libelle === s.libelle);
                return (
                    <Card key={key} className={classes.root} style={{ backgroundColor: (equals) ? 'LightBlue' : null }}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                {s.libelle}
                            </Typography>

                            <Typography variant="body2" component="p">
                                <br />
                                <a href={s.description} target="_blank" rel="noopener noreferrer">Pour plus d'infos, suivez ce lien</a>
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}

        </div>
    );
};

export default ModalProfil;
