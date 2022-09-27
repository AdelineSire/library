import { createContext, useState, useEffect } from 'react';

import { addCartItem } from '../lib/addCartItem';

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		setCartItems(newCartItems);
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
