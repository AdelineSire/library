import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

const CartSummary = () => {
	const { cartSum, cartDiscount, cartTotal } = useContext(CartContext);

	return (
		<div className='shadow-xl card w-96 bg-base-100'>
			<div className='card-body'>
				<h2 className='card-title'>Récapitulatif</h2>
				<div className='my-4'>
					<div className='flex justify-between'>
						<span>Panier</span> <span>{cartSum} €</span>
					</div>
					<div className='divider'></div>
					<div className='flex justify-between'>
						<span>Remise</span> <span>- {cartDiscount} €</span>
					</div>
					<div className='divider'></div>
					<div className='flex justify-between'>
						<span>TOTAL</span> <span>{cartTotal} €</span>
					</div>
				</div>
				<div className='justify-center card-actions'>
					<button className='btn btn-primary'>Valider mon panier</button>
				</div>
			</div>
		</div>
	);
};

export default CartSummary;
