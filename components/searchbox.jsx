import SearchIcon from './icons/search-icon';

const SearchBox = ({ placeholder, onChangeHandler }) => {
	return (
		<div className='my-8 form-control'>
			<div className='input-group'>
				<input
					type='text'
					placeholder={placeholder}
					className='input input-bordered'
					onChange={onChangeHandler}
				/>
				<span>
					<SearchIcon />
				</span>
			</div>
		</div>
	);
};

export default SearchBox;
