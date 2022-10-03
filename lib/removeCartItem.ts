import { CartItem } from '../interfaces';

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
	const newCartItems = cartItems.map((cartItem) => {
		if (cartItem.isbn === productToRemove.isbn) {
			return {
				...cartItem,
				quantity: cartItem.quantity - 1,
				totalPrice: cartItem.totalPrice - cartItem.price,
			};
		}
		return cartItem;
	});

	return newCartItems.filter((cartItem) => cartItem.quantity > 0);
};

export default removeCartItem;
