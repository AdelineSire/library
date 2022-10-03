const calculatePriceWithMinusDiscount = (cartSum: number, value: number) => {
	const result = cartSum - value;
	return result;
};

export default calculatePriceWithMinusDiscount;
