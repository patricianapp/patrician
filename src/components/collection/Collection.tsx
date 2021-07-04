// TODO: https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr

import React, { ReactElement, useEffect, useState } from 'react';
import CollectionGrid from './CollectionGrid';
import { CollectionItem } from '../../collection-item.interface';

interface Props {
	collection: Array<CollectionItem>;
}

export default function Collection({ collection }: Props): ReactElement {
	return collection.length > 0 ? (
		<CollectionGrid collection={collection}></CollectionGrid>
	) : (
		<div>Loading...</div>
	);
}
