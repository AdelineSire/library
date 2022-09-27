const calculateCartSum = (cartItems) => {
	if (cartItems.length === 0 || cartItems === undefined) return 0;
	const cartItemPrices = cartItems.map((cartItem) => cartItem.totalPrice);
	const cartSum = cartItemPrices.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
	return cartSum;
};

export default calculateCartSum;
