import {
	createContext,
	useState,
	ReactElement,
	Dispatch,
	SetStateAction,
	useEffect,
} from 'react';
import { CollectionItem } from '../collection-item.interface';
import { useRouter } from 'next/router';
import { fetchCollectionIfEmpty } from '../helpers/fetch-collection';

interface Props {
	children: ReactElement;
}

interface CollectionContextType {
	collection: Array<CollectionItem> | null;
	setCollection?: Dispatch<SetStateAction<Array<CollectionItem> | null>>;
}

export const CollectionContext = createContext<CollectionContextType>({
	collection: null,
});

export function CollectionProvider({ children }: Props) {
	const router = useRouter();
	const { username } = router.query;
	useEffect(() => {
		if (setCollection && username) {
			fetchCollectionIfEmpty(collection, setCollection, username.toString());
		}
	}, [username]);
	const [collection, setCollection] = useState<Array<CollectionItem> | null>(null);

	return (
		<CollectionContext.Provider value={{ collection, setCollection }}>
			{children}
		</CollectionContext.Provider>
	);
}
