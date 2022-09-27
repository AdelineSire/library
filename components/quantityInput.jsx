import MinusIcon from './icons/minus-icon';
import PlusIcon from './icons/plus-icon';

const QuantityInput = ({ quantity }) => {
	return (
		<div className='flex items-center gap-2'>
			<button className='btn btn-xs btn-circle'>
				<MinusIcon />
			</button>
			<span>{quantity}</span>
			<button className='btn btn-xs btn-circle'>
				<PlusIcon />
			</button>
		</div>
	);
};

export default QuantityInput;
