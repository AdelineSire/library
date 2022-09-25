import ShoppingBagIcon from './icons/shopping-bag-icon';

const CartDropdown = () => {
	return (
		<div className='dropdown dropdown-end'>
			<label tabIndex={0} className='btn btn-ghost btn-circle'>
				<div className='indicator'>
					<ShoppingBagIcon />
					<span className='badge badge-sm indicator-item'>0</span>
				</div>
			</label>
			<div
				tabIndex={0}
				className='mt-3 shadow card card-compact dropdown-content w-52 bg-base-100'
			>
				<div className='card-body'>
					<span className='text-lg font-bold'>0 Articles</span>
					<div className='card-actions'>
						<button className='btn btn-primary btn-block'>
							Voir le panier
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartDropdown;
