export const addCartItem = (cartItems, productToAdd) => {
	// Find if cartItems contains productToAdd
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.isbn === productToAdd.isbn
	);
	// If found, increment quantity
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? {
						...cartItem,
						quantity: cartItem.quantity + 1,
						totalPrice: cartItem.totalPrice + cartItem.price,
				  }
				: cartItem
		);
	}
	// Return new array with modified cartItems / new cart item
	return [
		...cartItems,
		{ ...productToAdd, quantity: 1, totalPrice: productToAdd.price },
	];
};
