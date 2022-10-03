import { useContext } from 'react';
import Image from 'next/future/image';

import MinusIcon from './icons/minus-icon';
import PlusIcon from './icons/plus-icon';

import { CartContext } from '../contexts/cart.context';

import { CartItem } from '../interfaces';

interface Props {
	cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
	const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
		useContext(CartContext);
	const { cover, title, quantity, totalPrice } = cartItem;

	const handleIncrease = () => {
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
				<h2 className='text-base md:text-lg lg:text-xl card-title font-title'>
					{title}
				</h2>
				<div className='flex items-center justify-end gap-8 card-actions'>
					<div className='flex items-center gap-8'>
						<span className='font-bold text-neutral'>{totalPrice} €</span>
						<div className='flex items-center gap-2'>
							<button
								onClick={handleDecrease}
								className='btn btn-xs btn-circle'
							>
								<MinusIcon />
							</button>
							<span>{quantity}</span>
							<button
								onClick={handleIncrease}
								className='btn btn-xs btn-circle'
							>
								<PlusIcon />
							</button>
						</div>
					</div>
					<button
						onClick={handleDelete}
						className='btn-secondary btn btn-xs sm:btn-sm'
					>
						Supprimer
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItemCard;
