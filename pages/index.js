import { useState, useEffect } from 'react';

import Navbar from '../components/navbar';
import SearchBox from '../components/searchbox';
import BookCardsList from '../components/book-cards-list';
import Spinner from '../components/icons/Spinner';

import { getBooks } from '../services/api';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [searchField, setSearchField] = useState('');
	const [books, setBooks] = useState([]);
	const [filteredBooks, setFilterBooks] = useState(books);

	useEffect(() => {
		getBooks().then((response) => {
			if (response.errorMessage) {
				alert(response.errorMessage);
			}
			setBooks(response);
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		const newFilteredBooks = books.filter((book) => {
			return book.title.toLocaleLowerCase().includes(searchField);
		});

		setFilterBooks(newFilteredBooks);
	}, [books, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='m-8 lg:mx-32'>
			<Navbar />
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder='Rechercher un titre'
			/>

			{loading && (
				<div className='flex justify-center mt-64'>
					<Spinner />
				</div>
			)}
			<BookCardsList books={filteredBooks} />
		</div>
	);
};

export default Home;
