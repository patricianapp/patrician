import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CollectionProvider } from '../src/contexts/CollectionContext';

interface CustomAppProps extends AppProps {
	collectionUrl: string;
}

function MyApp({ Component, pageProps, collectionUrl }: CustomAppProps) {
	return (
		<CollectionProvider>
			<Component {...pageProps} />
		</CollectionProvider>
	);
}
export default MyApp;
