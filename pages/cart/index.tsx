import { HeadingPrimary, Layout } from '../../src/components';
import { CartComponent } from '../../src/layouts/Cart';

const CartPage = () => {
	return (
		<Layout title="Carrito - 3" pageDescription="Carrito de compras de la tienda">
			<HeadingPrimary title="carrito de compras" />
			<CartComponent />
		</Layout>
	);
};
export default CartPage;
