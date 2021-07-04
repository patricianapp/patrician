import { useRouter } from 'next/router';
import React, { ReactElement, useContext, useEffect } from 'react';
import Collection from '../../../src/components/collection/Collection';
import { CollectionContext } from '../../../src/contexts/CollectionContext';
import { fetchCollectionIfEmpty } from '../../../src/helpers/fetch-collection';

export default function UserPage(): ReactElement {
	const router = useRouter();
	const { username } = router.query;
	const { collection, setCollection } = useContext(CollectionContext);
	useEffect(() => {
		if (setCollection && username) {
			fetchCollectionIfEmpty(collection, setCollection, username.toString());
		}
	}, [username]);

	if (!collection) return <div>Loading...</div>;

	return <Collection collection={collection}></Collection>;
}
