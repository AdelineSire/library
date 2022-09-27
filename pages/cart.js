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
				className='gap-2 btn-primary btn btn-xs sm:btn-sm md:btn-md lg:btn-lg'
			>
				<ChevronLeftIcon />
				Continuer mes achats
			</button>
			<div className='flex gap-4'>
				<CartItemsList />
				<CartSummary />
			</div>
		</div>
	);
};

export default Cart;
