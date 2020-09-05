import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './List.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor:'',
    boxShadow:'2px 2px 5px gray',
    boxSizing:'4px'
  },
});

const List = (props) => {
    const classes = useStyles();
    const {id,title,body} = props.list;
    return (
        <div className='main-list'>
              <Card className={classes.root}>
      <CardActionArea className='box'>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ID No:<span className='id'>{id}</span>
          </Typography>
          <Typography className='' variant="body2" color="textSecondary" component="p">
                {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
        <Link to={`/about/${id}`}>  <Button size="" color="primary">
          Details
        </Button></Link>
      </CardActions>
    </Card>
        </div>
    );
};

export default List;