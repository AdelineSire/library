import { useRouter } from 'next/router';

import ChevronLeftIcon from '../components/icons/chevron-left-icon';

export default function Custom404() {
	const router = useRouter();
	return (
		<div className='flex justify-center'>
			<div className='m-8 card w-96 bg-primary text-primary-content'>
				<div className='card-body'>
					<h2 className='card-title'>Erreur 404</h2>
					<p>La page que vous cherchez n&apos;existe pas</p>
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
