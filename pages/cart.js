import { useRouter } from 'next/router';

import ChevronLeftIcon from '../components/icons/chevron-left-icon';
import CartSummary from '../components/cart-summary';
import CartItemsList from '../components/cart-items-list';

const Cart = () => {
	const router = useRouter();

	return (
		<div className='m-8 lg:mx-32'>
			<button
				onClick={() => router.push('/')}
				className='gap-2 mb-4 btn-primary btn btn-xs sm:btn-sm md:btn-md'
			>
				<ChevronLeftIcon />
				Continuer mes achats
			</button>
			<div className='flex flex-col-reverse items-center gap-4 md:flex-row md:items-start'>
				<CartItemsList />
				<CartSummary />
			</div>
		</div>
	);
};

export default Cart;
