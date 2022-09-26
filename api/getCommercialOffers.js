const getCommercialOffers = async (isbnList) => {
	const url = `http://henri-poitier.xebia/books/${isbnList}/commercialOffers`;
	try {
		const getRequest = await fetch(url);
		const data = await getRequest.json();
		return data;
	} catch (error) {
		console.log({ error });
	}
};

export default getCommercialOffers;
