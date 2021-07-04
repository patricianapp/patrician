import { Dispatch, SetStateAction } from 'react';
import { readRemoteFile } from 'react-papaparse';
import { CollectionItem } from '../collection-item.interface';
import { UserData } from '../../pages/api/user/[username]';

export const fetchCollectionIfEmpty = async (
	collection: Array<CollectionItem> | null,
	setCollection: Dispatch<SetStateAction<Array<CollectionItem> | null>>,
	username: string
) => {
	const { url }: UserData = await (await fetch(`/api/user/${username}`)).json();

	console.log(collection);
	if (collection === null) {
		readRemoteFile(url, {
			worker: true,
			header: true,
			preview: 15,
			complete: (results) => {
				console.log(results);
				setCollection(results.data as unknown as Array<CollectionItem>);
			},
		});
	}
};
