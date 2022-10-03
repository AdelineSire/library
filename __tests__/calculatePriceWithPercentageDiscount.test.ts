import calculatePriceWithPercentageDiscount from '../lib/calculatePriceWithPercentageDiscount';

test('Given the cart total and a percentage value, returns the total after discount', () => {
	const cartTotal = 100;
	const percentageValue = 10;
	expect(calculatePriceWithPercentageDiscount(cartTotal, percentageValue)).toBe(
		90
	);
});
