import { createContext, useState, ReactElement, Dispatch, SetStateAction } from 'react';
import { CollectionItem } from '../collection-item.interface';

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
	const [collection, setCollection] = useState<Array<CollectionItem> | null>(null);

	return (
		<CollectionContext.Provider value={{ collection, setCollection }}>
			{children}
		</CollectionContext.Provider>
	);
}
