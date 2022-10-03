import calculatePriceWithSliceDiscount from '../lib/calculatePriceWithSliceDiscount';

test('Given the cart total, a range value and a discount per range value, returns the total after discount', () => {
	const cartTotal = 100;
	const sliceValue = 10;
	const value = 1;
	expect(calculatePriceWithSliceDiscount(cartTotal, sliceValue, value)).toBe(
		90
	);
});
