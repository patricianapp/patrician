/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCollection
// ====================================================

export interface getCollection_getUser_collection {
  __typename: "CollectionItem";
  artist: string;
  albumName: string;
}

export interface getCollection_getUser {
  __typename: "User";
  username: string;
  collection: getCollection_getUser_collection[];
}

export interface getCollection {
  getUser: getCollection_getUser;
}
