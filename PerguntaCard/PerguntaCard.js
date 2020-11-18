import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    textAlign:'left',
    marginTop: '8px',
    marginLeft: 'auto',
    marginRight: 'auto'
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

export default function PerguntaCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <div>
            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="user" className={classes.avatar}>
                    R
                </Avatar>
                }
                title={props.cabecalho}
                subheader={"Postado a "+props.createdAt+" horas"}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.descricao.substring(0,100)}
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.descricao.substring(101)}
                </Typography>
                </CardContent>
            </Collapse>
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
                <Link href={'/aprendizadocolaborativo/#/perguntaid'+props.id}>Ver Respostas</Link>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="mostrar mais"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            </Card>
        </div>
    )
}

PerguntaCard.propTypes = {
    cabecalho: PropTypes.string,
    descricao: PropTypes.string
}

PerguntaCard.defaultProps={
    cabecalho: 'Carregando',
    descricao: 'carregando'
}

