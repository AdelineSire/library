import Image from 'next/future/image';

import QuantityInput from './quantityInput';

const CartItemCard = ({ cartItem }) => {
	const { cover, title, quantity, totalPrice } = cartItem;

	return (
		<div className='shadow-xl card card-side bg-base-100'>
			<figure>
				<Image src={cover} alt={title} width={85} height={125} />
			</figure>
			<div className='card-body'>
				<h2 className='text-sm card-title font-title'>{title}</h2>
				<div className='justify-end card-actions'>
					<span className='font-bold text-neutral'>{totalPrice} €</span>
					<QuantityInput quantity={quantity} />
					<button className='btn btn-secondary btn-sm'>Supprimer</button>
				</div>
			</div>
		</div>
	);
};

export default CartItemCard;
