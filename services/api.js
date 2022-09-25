export const getBooks = async () => {
	const url = 'http://henri-potier.xebia.fr/books';
	try {
		const getRequest = await fetch(url);
		const data = await getRequest.json();
		return data;
	} catch (error) {
		console.log({ error });
	}
};
