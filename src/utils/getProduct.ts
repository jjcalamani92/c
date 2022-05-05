import { IProduct } from '../../interfaces';
import { SubCategory } from '../../content/constants';
export const getProductBySubCategory = (
	products: IProduct[],
	subCategory: string
) => {
	if (!SubCategory.validSubCategory.includes(subCategory)) {
		throw new Error(`Tipo de subCategoria '${subCategory}' no es correcto`);
	}
	return products.filter(
		(product: { subCategory: string }) => product.subCategory === subCategory
	);
};
