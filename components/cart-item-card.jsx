import { useContext } from 'react';
import Image from 'next/future/image';

import MinusIcon from './icons/minus-icon';
import PlusIcon from './icons/plus-icon';

import { CartContext } from '../contexts/cart.context';

const CartItemCard = ({ cartItem }) => {
	const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
		useContext(CartContext);
	const { cover, title, quantity, totalPrice } = cartItem;

	const handleIncrease = () => {
		console.log(cartItem);
		addItemToCart(cartItem);
	};
	const handleDecrease = () => {
		removeItemFromCart(cartItem);
	};
	const handleDelete = () => {
		deleteItemFromCart(cartItem);
	};

	return (
		<div className='shadow-xl card card-side bg-base-100'>
			<figure>
				<Image src={cover} alt={title} width={85} height={125} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title font-title'>{title}</h2>
				<div className='flex items-center justify-end gap-8 card-actions'>
					<span className='font-bold text-neutral'>{totalPrice} €</span>
					<div className='flex items-center gap-2'>
						<button onClick={handleDecrease} className='btn btn-xs btn-circle'>
							<MinusIcon />
						</button>
						<span>{quantity}</span>
						<button onClick={handleIncrease} className='btn btn-xs btn-circle'>
							<PlusIcon />
						</button>
					</div>
					<button onClick={handleDelete} className='btn btn-secondary btn-sm'>
						Supprimer
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItemCard;
