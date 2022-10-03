const calculatePriceWithPercentageDiscount = (
	cartSum: number,
	value: number
) => {
	const percentage = (cartSum / 100) * value;
	const result = cartSum - percentage;
	return result;
};

export default calculatePriceWithPercentageDiscount;
