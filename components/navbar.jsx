import CartDropdown from './cart-dropdown';

const Navbar = () => {
	return (
		<div className='px-0 navbar bg-base-100'>
			<div className='flex-1'>
				<h1 className='text-2xl font-title md:text-4xl'>
					La bibliothèque de Henri Potier
				</h1>
			</div>
			<div className='flex-none'>
				<CartDropdown />
			</div>
		</div>
	);
};

export default Navbar;
