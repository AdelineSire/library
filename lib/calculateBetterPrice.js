import calculatePriceWithPercentageDiscount from './calculatePriceWithPercentageDiscount';
import calculatePriceWithMinusDiscount from './calculatePriceWithMinusDiscount';
import calculatePriceWithSliceDiscount from './calculatePriceWithSliceDiscount';

export const calculateBetterPrice = (cartSum, offers) => {
	const totals = offers.map((offer) => {
		if (offer.type === 'percentage') {
			return calculatePriceWithPercentageDiscount(cartSum, offer.value);
		}
		if (offer.type === 'minus') {
			return calculatePriceWithMinusDiscount(cartSum, offer.value);
		}
		if (offer.type === 'slice') {
			return calculatePriceWithSliceDiscount(
				cartSum,
				offer.sliceValue,
				offer.value
			);
		}
	});

	const result = Math.min(...totals);

	return result;
};
