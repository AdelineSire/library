import sum from './sum';
import calculatePriceWithPercentageDiscount from './calculatePriceWithPercentageDiscount';
import calculatePriceWithMinusDiscount from './calculatePriceWithMinusDiscount';
import calculatePriceWithSliceDiscount from './calculatePriceWithSliceDiscount';

export const calculateBetterPrice = (prices, offers) => {
	const cartSum = sum([prices]);

	const totals = offers.map((offer) => {
		if (offer.type === 'percentage') {
			totals.push(calculatePriceWithPercentageDiscount(cartSum, offer.value));
			return;
		}
		if (offer.type === 'minus') {
			totals.push(calculatePriceWithMinusDiscount(cartSum, offer.value));
			return;
		}
		if (offer.type === 'slice') {
			totals.push(
				calculatePriceWithSliceDiscount(cartSum, offer.sliceValue, offer.value)
			);
			return;
		}
	});

	const result = Math.min(...totals);

	return result;
};
