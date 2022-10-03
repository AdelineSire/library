import { AppProps } from 'next/app';

import { CartProvider } from '../contexts/cart.context';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}

export default App;
