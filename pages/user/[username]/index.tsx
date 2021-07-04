import React, { ReactElement, useContext } from 'react';
import Collection from '../../../src/components/collection/Collection';
import { CollectionContext } from '../../../src/contexts/CollectionContext';

export default function UserPage(): ReactElement {
	const { collection } = useContext(CollectionContext);

	if (!collection) return <div>Loading...</div>;

	return <Collection collection={collection}></Collection>;
}
