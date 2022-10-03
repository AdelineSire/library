import { useContext } from 'react';
import { useRouter } from 'next/router';

import ShoppingBagIcon from './icons/shopping-bag-icon';

import { CartContext } from '../contexts/cart.context';

const CartDropdown = () => {
	const context = useContext(CartContext);
	const cartCount = context.cartCount;
	const router = useRouter();
	const cartCountLabel = cartCount > 1 ? 'Articles' : 'Article';

	return (
		<div className='dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-ghost btn-circle'>
				<div className='indicator'>
					<ShoppingBagIcon />
					<span className='badge badge-sm indicator-item'>{cartCount}</span>
				</div>
			</label>
			<div
				tabIndex={0}
				className='mt-3 shadow card card-compact dropdown-content w-52 bg-base-100'
			>
				<div className='card-body'>
					<span className='text-lg font-bold'>
						{cartCount} {cartCountLabel}
					</span>
					<div className='card-actions'>
						<button
							onClick={() => router.push('/cart')}
							className='btn btn-primary btn-block'
						>
							Voir le panier
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartDropdown;
