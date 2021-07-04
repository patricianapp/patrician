import type { NextApiRequest, NextApiResponse } from 'next';

export interface UserData {
	url: string;
	config: {};
}

const mockDb: Record<string, UserData> = {
	ejackson: {
		url: 'https://raw.githubusercontent.com/FOSSforlife/music-collection/main/collection.csv',
		// TODO: config
		config: {},
	},
};

export default function handler(req: NextApiRequest, res: NextApiResponse<UserData>) {
	const {
		query: { username },
		method,
	} = req;
	switch (method) {
		case 'GET':
			// TODO: Fetch URL from redis
			const userData = mockDb[username.toString()];
			if (!userData) {
				return res.status(404).end('User not found');
			} else {
				return res.status(200).json(userData); // toString() gets rid of type error
			}
		case 'POST':
			mockDb[username.toString()] = {
				url: 'fake url',
				config: {},
			};
			return res.status(200).end('Success');
	}
}
