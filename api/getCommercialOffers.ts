const getCommercialOffers = async (isbnList: string) => {
	const url = `http://henri-potier.xebia.fr/books/${isbnList}/commercialOffers`;

	try {
		const getRequest = await fetch(url);
		const data = await getRequest.json();
		return data.offers;
	} catch (error) {
		console.log({ error });
	}
};

export default getCommercialOffers;
