import React, { ReactElement, useState } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  // Box,
} from '@material-ui/core';
import { positions } from '@material-ui/system';
import { getCollection_user_collection } from '../../../__generated__/getCollection';
import clsx from 'clsx';

type CollectionItem = Omit<getCollection_user_collection, '__typename'>;

interface Props {
  item: CollectionItem;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'relative',
      width:200,
      height:285,
      transition: 'height 0.3s',
      zIndex: (props: {hovered: boolean}) => props.hovered ? 8000 : 0,
      '&:hover': {
        height:350,
        transition: 'height 0.3s',
        // TODO: itemText scroll on root hover (if the text is overflowing)
      }
    },
    '@keyframes textMarquee': {
      from: {
        transform: 'translateX(0%)',
        right: '0%',
      },
      to: {
        transform: 'translateX(-100%)',
        right: '-100%'
      }
    },
    itemText: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textAlign: 'center',
    },
    itemTextHovered: {
      animationName: '$textMarquee',
      animationDuration: '3s',
      animationPlayState: (props: {hovered: boolean}) => props.hovered ? 'running' : 'paused',
      animationIterationCount: 'infinite',
      animationDirection: 'alternate',
      display: 'inline-block',
      position: 'relative',
      right: '-100%',
      transform: 'translateX(-100%)',
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function CollectionItemComponent({item}: Props): ReactElement {
  const [hovered, setHovered] = useState(false);
  const styleProps = { hovered };
  const classes = useStyles(styleProps);
  const longText = item.title.length > 20; // TODO: Make this conditional based on width of card and title

  return (
    <div style={{height: '300px'}}>
    <Card
      className={classes.root}
      onMouseEnter={() => {setHovered(true)}}
      onMouseLeave={() => {setHovered(false)}}
      >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${item.title}`}
          height="200"
          image={item.itemDetails.coverArt ? item.itemDetails.coverArt :
            `https://coverartarchive.org/release-group/${item.itemDetails.mbid}/front-250`}
          title={`${item.title}`}
        />
        <CardContent>
          <div style={{height:'30px'}}><Typography className={classes.itemText} gutterBottom>{item.artist} </Typography></div>
          <div style={{height:'30px'}}><Typography className={clsx(classes.itemText, {[classes.itemTextHovered]: hovered && longText})} gutterBottom>{item.title} </Typography></div>
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
    </div>
  );
}
