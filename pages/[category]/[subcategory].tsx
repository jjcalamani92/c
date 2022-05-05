import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Layout } from "../../src/components";
import { ProductLayout } from "../../src/layouts";
import { useRouter } from "next/router";
import { getProductBySubCategory } from "../../src/utils/getProduct";
import { useProduct } from "../../hooks";

interface Props {
	subcategory: string;
}

const ProductPage: NextPage<Props> = ({ subcategory }) => {
	const router = useRouter();
	const { category } = router.query;

	const { products, isLoading } = useProduct(
		`/paintworkproducts?category=${category}`
	);
	const Products = getProductBySubCategory(products, subcategory);
	return (
		<Layout
			title={"Choco - Stores"}
			pageDescription={"Encuentra tu ropa favorita"}
		>
			<ProductLayout
				products={Products}
				isLoading={isLoading}
				title={subcategory}
			/>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = [
		{ params: { category: "linea-automotiva", subcategory: "poliuretano" } },
		{ params: { category: "linea-automotiva", subcategory: "acrilico" } },
		{ params: { category: "linea-automotiva", subcategory: "gloss" } },
		{
			params: {
				category: "linea-automotiva",
				subcategory: "protector-de-chasis"
			}
		},
		{ params: { category: "linea-automotiva", subcategory: "masilla" } },
		{ params: { category: "linea-automotiva", subcategory: "primer" } },
		{ params: { category: "linea-automotiva", subcategory: "mateante" } },
		{ params: { category: "linea-automotiva", subcategory: "kit" } }
	];
	return {
		paths,
		fallback: false // false or 'blocking',
	};
};

export const getStaticProps: GetStaticProps = ({ params }) => {
	const { subcategory = "" } = params as { subcategory: string };
	return {
		props: {
			subcategory
		},
		revalidate: 60 * 60 * 24
	};
};

export default ProductPage;
