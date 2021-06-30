// TODO: https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr

import React, { ReactElement, useEffect, useState } from 'react';
import CollectionGrid from './CollectionGrid';
import { readRemoteFile } from 'react-papaparse';
import { CollectionItem } from '../../collection-item.interface';

interface Props {
	collectionUrl: string;
}

export default function Collection({ collectionUrl }: Props): ReactElement {
	const [collection, setCollection] = useState<Array<CollectionItem>>([]);

	useEffect(() => {
		readRemoteFile(collectionUrl, {
			worker: true,
			header: true,
			preview: 15,
			complete: (results) => {
				console.log(results);
				setCollection(results.data as unknown as Array<CollectionItem>);
			},
		});
	}, []);

	return collection.length > 0 ? (
		<CollectionGrid collection={collection}></CollectionGrid>
	) : (
		<div>Loading...</div>
	);
}
