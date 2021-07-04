export interface CollectionItem {
	Artist: string;
	Title: string;
	MBID: string;
	Rating?: string;
	Plays?: number;
	Review?: string;
	CoverArt?: string;
	Tags?: Array<string>;
}

export interface CollectionCsvRow extends CollectionItem {
	Tags?: string;
	' First Name'?: string;
	'Last Name'?: string;
	'First Name localized'?: string;
	'Last Name localized'?: string;
}
