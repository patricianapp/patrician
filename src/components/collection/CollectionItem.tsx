import React, { ReactElement } from 'react';
import { Paper, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { getCollection_getUser_collection } from '../../../__generated__/getCollection';

type CollectionItem = Omit<getCollection_getUser_collection, '__typename'>;

interface Props {
  item: CollectionItem;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width:200,
    },
    itemText: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textAlign: 'center'
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function CollectionItemComponent({item}: Props): ReactElement {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${item.title}`}
          height="200"
          image={`https://coverartarchive.org/release-group/${item.mbid}/front-250`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.itemText} gutterBottom>{item.artist} </Typography>
          <Typography className={classes.itemText} gutterBottom>{item.title} </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
