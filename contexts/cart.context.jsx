import { createContext, useState, useEffect } from 'react';

import addCartItem from '../lib/addCartItem';
import removeCartItem from '../lib/removeCartItem';
import deleteCartItem from '../lib/deleteCartItem';
import calculateCartSum from '../lib/calculateCartSum';
import calculateBetterPrice from '../lib/calculateBetterPrice';
import getCommercialOffers from '../api/getCommercialOffers';

export const CartContext = createContext({
	cartItems: [],
	setCartItems: () => {},
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	deleteItemFromCart: () => {},
	cartCount: 0,
	cartSum: 0,
	cartDiscount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartSum, setCartSum] = useState(0);
	const [cartDiscount, setCartDiscount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	// Each time the cartItems array changes
	useEffect(() => {
		// Calculate the new amount of items in the cart
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);

		// If the cart is not empty
		if (newCartCount !== 0) {
			const newSum = calculateCartSum(cartItems);
			setCartSum(newSum);

			// Create a list of isbn formated to call commercial offers api
			const isbnList = cartItems.map((cartItem) => cartItem.isbn);
			const formatedIsbnList = isbnList.join(',');

			const calculateCart = async () => {
				const offers = await getCommercialOffers(formatedIsbnList);
				const betterPrice = calculateBetterPrice(newSum, offers);
				setCartTotal(betterPrice);
				setCartDiscount(newSum - betterPrice);
			};
			calculateCart();
		}
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		setCartItems(newCartItems);
	};

	const removeItemFromCart = (productToRemove) => {
		const newCartItems = removeCartItem(cartItems, productToRemove);
		setCartItems(newCartItems);
	};

	const deleteItemFromCart = (productToDelete) => {
		const newCartItems = deleteCartItem(cartItems, productToDelete);
		setCartItems(newCartItems);
	};

	const value = {
		addItemToCart,
		removeItemFromCart,
		deleteItemFromCart,
		cartItems,
		setCartItems,
		cartCount,
		cartSum,
		cartDiscount,
		cartTotal,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
