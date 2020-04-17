export type Maybe<T> = T | null;

export interface AuthCredentialsInput {
  username: string;

  password: string;
}

export interface AddItemInput {
  artist: string;

  album: string;

  mbid: string;

  rating?: Maybe<string>;
}

export interface RecipeInput {
  title: string;

  description?: Maybe<string>;
}

export interface RateInput {
  recipeId: string;

  value: number;
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace AnonymousQuery_1 {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    getUser: GetUser;
  };

  export type GetUser = {
    __typename?: "User";

    username: string;

    collection: Collection[];
  };

  export type Collection = {
    __typename?: "CollectionItem";

    artist: string;

    albumName: string;
  };
}
