import { useProduct } from '../../hooks';
import { Layout } from '../../src/components';
import { QueryLayout } from '../../src/layouts';

export default function SearchPage() {
	const { products, isLoading } = useProduct(`/search/wearproducts/a`);
	return (
		<Layout
			title={'Choco - Store'}
			pageDescription={'Encuentra tu ropa favorita'}
		>
			<QueryLayout
				products={products}
				isLoading={isLoading}
				title={'poliuretano'}
			/>
			{/* <HomeLayout /> */}
			{/* <CategoryLayout products={products} isLoading={isLoading} /> */}
			{/* <DetailLayout product={products[0]} /> */}
			{/* <ProductLayout products={products} isLoading={isLoading} /> */}
		</Layout>
	);
}
