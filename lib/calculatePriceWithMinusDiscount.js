const calculatePriceWithMinusDiscount = (cartSum, value) => {
	const result = cartSum - value;
	return result;
};

export default calculatePriceWithMinusDiscount;
