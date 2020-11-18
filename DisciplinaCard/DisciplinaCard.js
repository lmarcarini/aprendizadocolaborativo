import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DisciplinaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
            {props.disciplina||"Carregando"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={"/aprendizadocolaborativo/#/perguntasde"+props.coddisciplina||"calculo"} size="small">{props.disciplina||"Carregando"}</Button>
      </CardActions>
    </Card>
  );
}

DisciplinaCard.propTypes={
  coddisciplina: PropTypes.string
}