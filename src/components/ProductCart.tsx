import { Counter } from './Counter';

const cart = [
	{
		id: 'gfh545',
		title: 'Chamarra Para Hombre Akiral - Gris',
		mark: 'adidas',
		image: [
			'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg'
		],
		description:
			'¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.',
		inStock: 7,
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
		slug: 'chamarra_para_hombre_akiral_gris',
		line: 'ropa',
		category: 'men',
		subCategory: 'chamarras',
		tags: ['sweatshirt'],
		oldPrice: 560,
		price: 649,
		quantity: 1
	},
	{
		id: 'gfh545',
		title: 'Chamarra Para Hombre Akiral - Gris',
		mark: 'adidas',
		image: [
			'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg'
		],
		description:
			'¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.',
		inStock: 7,
		sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
		slug: 'chamarra_para_hombre_akiral_gris',
		line: 'ropa',
		category: 'men',
		subCategory: 'chamarras',
		tags: ['sweatshirt'],
		oldPrice: 560,
		price: 649,
		quantity: 1
	}
];
export const ProductCart = () => {
	return (
		<div className="row">
			<h2>tu carrito</h2>
			{cart.map((data: any, index: number) => (
				<div className="cart-item" key={index}>
					<a
						className="image"
						href={`/${data.category}/${data.subCategory}/${data.id}`}
					>
						<img src={`${data.image[0]}`} alt={`${data.title}`} />
					</a>

					<div className="content">
						<h3>{data.title}</h3>

						<div className="price">
							{' '}
							<p>Precio:</p> Bs {data.price}
						</div>

						<div className="count">
							<div className="title">Cantidad:</div>
							<Counter />
						</div>
						<br />

						<div className="btn">quitar producto</div>
					</div>
				</div>
			))}
		</div>
	);
};
