import { Counter, OrderSummary, ProductCart } from '../components';

export const CartComponent = () => {
	const deleteItemCart = () => {
		console.log('deleteItemCart');
	};
	const clearCart = () => {
		console.log('clearCart');
	};

	return (
		<>
			<section className="checkout">
				<ProductCart />
				<OrderSummary />
			</section>
		</>
	);
};
