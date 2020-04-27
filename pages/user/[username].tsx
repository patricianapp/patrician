import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { withApollo } from '../../lib/apollo';

import CollectionGrid from '../../src/components/collection/CollectionGrid';
import collectionMockData from '../../data/mock-data-1.json';

interface Props {}

function UserPage({}: Props): ReactElement {
	const router = useRouter();
	const { username } = router.query;

	// TODO: Get query from graphql folder
	const GET_COLLECTION_QUERY = gql`
		query getCollection($userId: ID!) {
			user(where: { id: $userId }) {
				username
				collection {
					artist
					title
					itemDetails {
						mbid
						coverArt
					}
					rating
					plays
				}
			}
		}
	`;

	let loading = true;
	let error, data;
	if (username === 'mock') {
		data = { user: { collection: collectionMockData } };
		loading = error = false;
	} else {
		({ loading, error, data } = useQuery(GET_COLLECTION_QUERY, {
			variables: {
				userId: username,
			},
		}));
	}
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;
	return (
		<div>
			<CollectionGrid collection={data.user.collection} />
		</div>
	);
}

// export default withApollo(UserPage);
export default UserPage;
