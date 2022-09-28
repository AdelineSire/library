import { useState } from 'react';
import { useRouter } from 'next/router';

import ChevronLeftIcon from '../components/icons/chevron-left-icon';
import CartSummary from '../components/cart-summary';
import CartItemsList from '../components/cart-items-list';

const Cart = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const router = useRouter();

	if (isModalOpen) {
		return (
			<div className='flex justify-center'>
				<div className='m-8 card w-96 bg-primary text-primary-content'>
					<div className='card-body'>
						<h2 className='card-title'>Fin du parcours !</h2>
						<p>Merci pour votre visite</p>
						<button
							onClick={() => router.push('/')}
							className='gap-2 mb-4 btn btn-xs sm:btn-sm md:btn-md'
						>
							<ChevronLeftIcon />
							Retour à l&apos;accueil
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='m-8 lg:mx-32'>
			<button
				onClick={() => router.push('/')}
				className='gap-2 mb-4 btn-primary btn btn-xs sm:btn-sm md:btn-md'
			>
				<ChevronLeftIcon />
				Continuer mes achats
			</button>
			<div className='flex flex-col-reverse items-center gap-4 md:flex-row md:items-start'>
				<CartItemsList />
				<CartSummary setIsModalOpen={setIsModalOpen} />
			</div>
		</div>
	);
};

export default Cart;
