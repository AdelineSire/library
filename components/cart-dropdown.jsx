import { useContext } from 'react';

import ShoppingBagIcon from './icons/shopping-bag-icon';

import { CartContext } from '../contexts/cart.context';

const CartDropdown = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<div onClick={toggleIsCartOpen} className='dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-ghost btn-circle'>
				<div className='indicator'>
					<ShoppingBagIcon />
					<span className='badge badge-sm indicator-item'>{cartCount}</span>
				</div>
			</label>
			{isCartOpen && (
				<div
					tabIndex={0}
					className='mt-3 shadow card card-compact dropdown-content w-52 bg-base-100'
				>
					<div className='card-body'>
						<span className='text-lg font-bold'>{cartCount} Articles</span>
						<div className='card-actions'>
							<button className='btn btn-primary btn-block'>
								Voir le panier
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartDropdown;
