import React, { ReactElement } from 'react';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { withApollo } from '../../lib/apollo';

import CollectionComponent from '../../src/components/collection/Collection';
import collectionMockData from '../../data/mock-data-1.json';

interface Props {

}

function UserPage({}: Props): ReactElement {
  const router = useRouter();
  const { username } = router.query;

  const GET_COLLECTION_QUERY = gql`
    query getCollection {
      getUser(username: "user1") {
        username
        collection {
          artist
          albumName as title
        }
      }
    }
  `;

  let loading, error, data;
  if(username === 'mock') {
    data = {collection: collectionMockData};
    loading = error = false;
  }
  else {
    ({ loading, error, data } = useQuery(GET_COLLECTION_QUERY));
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <CollectionComponent collection={data.collection}></CollectionComponent>
    </div>
  );
}

// export default withApollo(UserPage);
export default UserPage;