export const OrderSummary = () => {
	return (
		<div className="row">
			<h2>tu orden</h2>
			<div className="orders">
				<div className="order">
					<h3>Nro de productos</h3>
					<p> 19 Items</p>
				</div>
				<div className="order">
					<h3>Subtotal</h3>
					<p> 19 </p>
				</div>
				<div className="order">
					<h3>Impuestos</h3>
					<p> 19 </p>
				</div>
				<div className="order-total">
					<h3>Total</h3>
					<p> 19 </p>
				</div>
			</div>

			<button className="btn">Realizar pedido por whatsapp</button>
			<button className="btn">Limpiar carrito</button>
		</div>
	);
};
