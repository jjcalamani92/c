export interface IProduct {
	_id: string;
	title: string;
	mark: string;
	image: string[];
	description: string;
	use: string;
	inStock: number;
	slug: string;
	line: string;
	category: 'linea-automotiva';
	subCategory: ISubCategoryP;
	price: number;
	oldPrice: number;
	tags: string[];
	client: string;
	status: boolean;

	createdAt: string;
	updatedAt: string;
}
export type ISubCategoryP =
	| 'poliuretano'
	| 'acrilico'
	| 'gloss'
	| 'protector-de-chasis'
	| 'masilla'
	| 'primer'
	| 'mateante'
	| 'kit';
