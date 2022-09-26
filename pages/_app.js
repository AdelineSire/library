import { CartProvider } from '../contexts/cart.context';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<CartProvider>
			<Component {...pageProps} />
		</CartProvider>
	);
}

export default MyApp;
