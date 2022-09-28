const deleteCartItem = (cartItems, productToDelete) => {
	const filteredCartItems = cartItems.filter(
		(cartItem) => cartItem.isbn !== productToDelete.isbn
	);
	return filteredCartItems;
};

export default deleteCartItem;
