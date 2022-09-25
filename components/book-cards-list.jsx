import BookCard from './book-card';

const BookCardsList = ({ books }) => {
	console.log('books in BookCardsList: ', books);

	return (
		<div className='grid grid-cols-1 gap-8 md:grid-cols-2 '>
			{books.map((book) => {
				return <BookCard key={book.isbn} book={book} />;
			})}
		</div>
	);
};

export default BookCardsList;
