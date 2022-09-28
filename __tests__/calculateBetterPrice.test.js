import calculateBetterPrice from '../lib/calculateBetterPrice';

it('should return better price', () => {
	const cartSum = 65;
	const offers = [
		{
			type: 'percentage',
			value: 4,
		},
		{
			type: 'minus',
			value: 15,
		},
		{
			type: 'slice',
			sliceValue: 100,
			value: 12,
		},
	];
	expect(calculateBetterPrice(cartSum, offers)).toBe(50);
});
