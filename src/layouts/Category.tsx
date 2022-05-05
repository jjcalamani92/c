import React, { FC } from 'react';
import { IProduct } from '../../interfaces';
import {
	HeadingPrimary,
	HeadingSecondary,
	Spinner2,
	SwiperCategory
} from '../components';
import { SubCategory } from '../../content/constants';
import { getProductBySubCategory } from '../utils/getProduct';

interface Props {
	products: IProduct[];
	subCategory: string;
	isLoading: boolean;
	title: string;
}

const CategoryComponent: FC<Props> = ({
	products,
	subCategory,
	isLoading,
	title
}) => {
	const productsCategory = getProductBySubCategory(products, subCategory);
	return (
		<>
			<HeadingSecondary title={title} category="#" />
			{isLoading ? <Spinner2 /> : <SwiperCategory products={productsCategory} />}
		</>
	);
};

export const CategoryLayout = ({ products, isLoading, title }) => {
	return (
		<>
			<HeadingPrimary title={title} />
			<section className="home">
				{SubCategory.validSubCategory.map((subcategory, i) => (
					<CategoryComponent
						products={products}
						subCategory={subcategory}
						isLoading={isLoading}
						title={subcategory}
						key={i}
					/>
				))}
			</section>
		</>
	);
};
