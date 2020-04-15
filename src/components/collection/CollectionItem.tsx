import React, { ReactElement } from 'react';
import { Paper, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import { getCollection_getUser_collection } from '../../../__generated__/getCollection';

type CollectionItem = Omit<getCollection_getUser_collection, '__typename'>;

interface Props {
  item: CollectionItem;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 140,
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
    <Paper className={classes.paper}>
      <Typography>{item.artist} - {item.title}</Typography>
    </Paper>
  );
}
