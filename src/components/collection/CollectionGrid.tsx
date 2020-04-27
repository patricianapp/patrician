import React, { ReactElement } from "react";
import CollectionItemCard from "./CollectionItemCard";
import { Grid, makeStyles, createStyles, Theme } from "@material-ui/core";
import { getCollection_user_collection } from "../../../__generated__/getCollection";

type CollectionItem = Omit<getCollection_user_collection, "__typename">;

interface Props {
  collection: Array<CollectionItem>;
  filters?: {};
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
  })
);

const data = [1, 2, 3];

export default function CollectionGrid({ collection }: Props): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {collection.map((item, itemIndex) => (
              <Grid key={itemIndex} item>
                <CollectionItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
