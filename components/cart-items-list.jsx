import { useContext } from 'react';

import CartItemCard from './cart-item-card';

import { CartContext } from '../contexts/cart.context';

const CartItemsList = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<div className='flex flex-col gap-4'>
			{cartItems.map((cartItem) => {
				return <CartItemCard key={cartItem.isbn} cartItem={cartItem} />;
			})}
		</div>
	);
};

export default CartItemsList;
