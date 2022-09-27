const calculatePriceWithPercentageDiscount = (cartSum, value) => {
	const percentage = (cartSum / 100) * value;
	const result = cartSum - percentage;
	return result;
};

export default calculatePriceWithPercentageDiscount;
