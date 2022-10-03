import calculatePriceWithPercentageDiscount from './calculatePriceWithPercentageDiscount';
import calculatePriceWithMinusDiscount from './calculatePriceWithMinusDiscount';
import calculatePriceWithSliceDiscount from './calculatePriceWithSliceDiscount';

import { Offer } from '../interfaces';

const calculateBetterPrice = (cartSum: number, offers: Offer[]) => {
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

	const filteredTotals = totals.filter(
		(total) => typeof total === 'number'
	) as number[];
	const result = Math.min(...filteredTotals);

	return result;
};

export default calculateBetterPrice;
