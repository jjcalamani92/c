import { Layout } from '../src/components';
import { HomeLayout } from '../src/layouts';

export default function Index() {
	return (
		<Layout
			title={'Choco - Store'}
			pageDescription={'Encuentra tu ropa favorita'}
		>
			<HomeLayout />
			{/* <CategoryLayout products={products} isLoading={isLoading} /> */}
			{/* <DetailLayout product={products[0]} /> */}
			{/* <ProductLayout products={products} isLoading={isLoading} /> */}
		</Layout>
	);
}
