import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const UserPage = props => {
  const router = useRouter();
  const { username } = router.query;
  console.log(username);

  const GET_COLLECTION_QUERY = gql`
    query getCollection {
      getUser(username: "user1") {
        username
        collection {
          artist
          albumName
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_COLLECTION_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return data.collection.map(({ artist, albumName }) => (
    // TODO: replace key with id
    <div key={`${artist}${albumName}`}>
      <p>
        {artist} - {albumName}
      </p>
    </div>
  ));
}

UserPage.propTypes = {

}

export default UserPage
