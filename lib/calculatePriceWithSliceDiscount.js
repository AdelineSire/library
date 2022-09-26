const calculatePriceWithSliceDiscount = (cartSum, sliceValue, value) => {
	const slices = Math.floor(cartSum / sliceValue);
	const discount = slices * value;
	const result = cartSum - discount;
	return result;
};

export default calculatePriceWithSliceDiscount;
