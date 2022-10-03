export interface Book {
	isbn: string;
	title: string;
	price: number;
	cover: string;
	synopsis: string[];
}

// export interface CartItem {
// 	product: Book;
// 	quantity: number;
// 	totalPrice: number;
// }
export interface CartItem extends Book {
	quantity: number;
	totalPrice: number;
}

export interface Offer {
	type: string;
	sliceValue: number;
	value: number;
}
