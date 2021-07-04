import { CollectionCsvRow } from '../collection-item.interface';

export const csvToCollection = (csv: Array<CollectionCsvRow>) => {
	// convert tags to array
	// account for RYM artist columns
	return `csv.map(row => {
    row.tags =
  })`;
};
