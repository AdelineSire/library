import { CartItem } from '../interfaces';

const deleteCartItem = (cartItems: CartItem[], productToDelete: CartItem) => {
	const filteredCartItems = cartItems.filter(
		(cartItem) => cartItem.isbn !== productToDelete.isbn
	);
	return filteredCartItems;
};

export default deleteCartItem;
