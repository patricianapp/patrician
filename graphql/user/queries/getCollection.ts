import gql from 'graphql-tag';

export const getCollectionQuery = gql`
  query {
    getUser(username: "user1") {
      username
      collection {
        artist
        albumName
      }
    }
  }
`;