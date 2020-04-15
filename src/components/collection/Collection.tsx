import React, { ReactElement } from 'react'
import CollectionItemComponent from './CollectionItem';
import { Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import { getCollection_getUser_collection } from '../../../__generated__/getCollection';

type CollectionItem = Omit<getCollection_getUser_collection, '__typename'>;

interface Props {
  collection: Array<CollectionItem>
  filters?: {}
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

const data = [1, 2, 3];

export default function CollectionComponent({ collection }: Props): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {collection.map((item) => (
              <Grid key={item.mbid} item>
                <CollectionItemComponent item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
