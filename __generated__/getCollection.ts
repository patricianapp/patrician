/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCollection
// ====================================================

export interface getCollection_user_collection_itemDetails {
  __typename: "Item";
  mbid: string | null;
  coverArt: string | null;
}

export interface getCollection_user_collection {
  __typename: "CollectionItem";
  artist: string;
  title: string;
  itemDetails: getCollection_user_collection_itemDetails | null;
  rating: string;
  plays: number | null;
}

export interface getCollection_user {
  __typename: "User";
  username: string;
  collection: getCollection_user_collection[] | null;
}

export interface getCollection {
  user: getCollection_user;
}
