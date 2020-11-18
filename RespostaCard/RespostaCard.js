import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    textAlign:'left',
    marginTop: '8px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'floralwhite'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RespostaCard(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {props.email.charAt(0)}
                </Avatar>
                }
                subheader={"Postado a "+props.createdAt+" horas"}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.comentario}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="dislike">
                <ThumbDownIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
            </Card>
        </div>
    )
}

RespostaCard.propTypes = {
    cabecalho: PropTypes.string,
    descricao: PropTypes.string,
    email: PropTypes.string,
    comentario: PropTypes.string
}

RespostaCard.defaultProps={
    cabecalho: 'Carregando',
    descricao: '',
    email: 'R@email.com',
    comentario: 'carregando'
}