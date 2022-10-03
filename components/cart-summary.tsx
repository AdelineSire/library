import { Dispatch, SetStateAction, useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

interface Props {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CartSummary = ({ setIsModalOpen }: Props) => {
	const { cartSum, cartDiscount, cartTotal, setCartItems } =
		useContext(CartContext);

	const handleSubmit = () => {
		setCartItems([]);
		setIsModalOpen(true);
	};

	return (
		<div className='shadow-xl card w-96 bg-base-100'>
			<div className='card-body'>
				<h2 className='text-base card-title'>Récapitulatif</h2>
				<div className='my-4 text-sm'>
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
					<button
						onClick={handleSubmit}
						className='mb-4 btn-primary btn btn-xs sm:btn-sm md:btn-md'
					>
						Valider mon panier
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartSummary;
