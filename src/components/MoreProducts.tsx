import { FC } from 'react';
import { IProduct } from '../../interfaces';
import { getProductBySubCategory } from '../utils/getProduct';
import { SwiperMoreProduct } from './Swiper';

interface Props {
	products: IProduct[];
	subCategory: string;
	isLoading: boolean;
}

export const MoreProducts: FC<Props> = ({
	products,
	subCategory,
	isLoading
}) => {
	const productsCategory = getProductBySubCategory(products, subCategory);
	return (
		<>
			{/* {isLoading ? <Spinner2 /> : <SwiperCategory products={productsCategory} />} */}
			<SwiperMoreProduct products={productsCategory} />
		</>
	);
};
