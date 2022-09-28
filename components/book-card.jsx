import { useContext } from 'react';

import Image from 'next/future/image';

import { CartContext } from '../contexts/cart.context';

const BookCard = ({ book }) => {
	const { addItemToCart } = useContext(CartContext);

	const { isbn, title, price, cover, synopsis } = book;
	const alt = 'Couverture du livre ' + title;
	const truncatedSynopsis = synopsis[0].slice(0, 132) + ' ...';

	const addProductToCart = () => addItemToCart(book);

	return (
		<div className='shadow-xl card lg:card-side bg-base-100'>
			<figure>
				<Image src={cover} alt={alt} width={170} height={250} />
			</figure>
			<div className='card-body'>
				<h2 className='text-base md:text-lg lg:text-xl card-title font-title '>
					{title}
				</h2>
				<p className='text-xs'>
					<span className='font-semibold'>ISBN : </span>
					{isbn}
				</p>
				<p className='text-sm text-justify md:text-base'>{truncatedSynopsis}</p>
				<div className='items-center justify-center gap-8 pt-4 card-actions'>
					<span className='font-bold text-neutral'>{price} €</span>
					<button onClick={addProductToCart} className='btn btn-primary'>
						Ajouter au panier
					</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
