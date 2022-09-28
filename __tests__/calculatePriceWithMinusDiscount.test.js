import calculatePriceWithMinusDiscount from '../lib/calculatePriceWithMinusDiscount';

test('Substracts discount from cart total', () => {
	const cartTotal = 100;
	const discount = 10;
	expect(calculatePriceWithMinusDiscount(cartTotal, discount)).toBe(90);
});
