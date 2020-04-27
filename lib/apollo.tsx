import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-unfetch';

export const createApolloClient = () => {
	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			fetch,
			credentials: 'same-origin',
			uri: `${process.env.apiUrl}/graphql`,
		}),
	});

	return client;
};

export const withApollo = (Component) => (
	<ApolloProvider client={createApolloClient()}>
		<Component />
	</ApolloProvider>
);
