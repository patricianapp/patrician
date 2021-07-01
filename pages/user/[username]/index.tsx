import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';

const DynamicCollection = dynamic(
	() => import('../../../src/components/collection/Collection'),
	{ ssr: false }
);

const mockDb: Record<string, string> = {
	ejackson:
		'https://raw.githubusercontent.com/FOSSforlife/music-collection/main/collection.csv',
};

interface Props {
	collectionUrl: string;
}

export async function getServerSideProps({ params }: { params: { username: string } }) {
	// TODO: Fetch URL from redis
	return {
		props: {
			collectionUrl: mockDb[params.username],
		}, // will be passed to the page component as props
	};
}

export default function UserPage({ collectionUrl }: Props): ReactElement {
	return <DynamicCollection collectionUrl={collectionUrl}></DynamicCollection>;
}
