import React, { ReactElement } from 'react';
import { CollectionItem } from '../../../../src/collection-item.interface';

interface Props {
	item: CollectionItem;
}

export default function ItemPage({ item }: Props): ReactElement {
	const { Artist, Title, CoverArt, MBID, Plays, Rating, Review } = item;
	return (
		<div>
			<p>Artist: {Artist}</p>
			<p>Title: {Title}</p>
			<p>{CoverArt && `Cover Art URL: ${CoverArt}`}</p>
			<p>{MBID && `MBID: ${MBID}`}</p>
			<p>{Plays && `Plays: ${Plays}`}</p>
			<p>{Rating && `Rating: ${Rating}`}</p>
			<p>{Review && `Review: ${Review}`}</p>
		</div>
	);
}
