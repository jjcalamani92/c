import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import {
	Counter,
	HeadingPrimary,
	HeadingTertiary,
	Price,
	Rating,
	Selector,
	SocialMedia,
	SwiperDetail
} from '../components';
import { IProduct } from '../../interfaces';
import { MoreProducts } from '../components/MoreProducts';

interface Props {
	product: IProduct;
	products: IProduct[];
	isLoading: boolean;
	subCategory: string;
}

export const DetailLayout: FC<Props> = ({
	product,
	products,
	isLoading,
	subCategory
}) => {
	const { image, price, description, title } = product;
	return (
		<>
			<HeadingPrimary title="detalles del producto" />
			<section className="detail">
				<div className="image">
					<SwiperDetail image={image} />
				</div>
				<div className="content">
					<h2 className="product-title">{title}</h2>
					{/* <a href = "#" className = "product-link">visit nike store</a> */}
					<div className="price-rating">
						<Price />
						<Rating />
					</div>

					<div className="product-detail">
						<h2>sobre este producto: </h2>
						<p>{description}</p>
					</div>
					<div className="product-detail">
						<ul>
							{/* <li>
								<FontAwesomeIcon className="icon" icon={faCheckCircle} />
								Color: <span>Como se muestra en la imagen</span>
							</li> */}
							<li>
								<FontAwesomeIcon className="icon" icon={faCheckCircle} />
								Disponible: <span>en stock</span>
							</li>
							<li>
								<FontAwesomeIcon className="icon" icon={faCheckCircle} />
								Categoria: <span>{product.category}</span>
							</li>
							{/* <li>
								<FontAwesomeIcon className="icon" icon={faCheckCircle} />
								Área de envio: <span>Todo el pais</span>
							</li> */}
							{/* <li>
								<FontAwesomeIcon className="icon" icon={faCheckCircle} />
								Tarifa de envio: <span>Gratis</span>
							</li> */}
						</ul>
					</div>
					{/* <div className="select">
						<div className="title">tallas:</div>
						<Selector sizes={sizes} />
					</div> */}
					<div className="purchase-info">
						<div className="count">
							<div className="title">Cantidad:</div>
							<Counter />
						</div>
						<button type="button" className="btn">
							Agregar al carrito <i className="fas fa-shopping-cart"></i>
						</button>
					</div>
					<div className="social-link">
						<div className="title">Compartir:</div>
						<SocialMedia />
					</div>
				</div>
			</section>

			<HeadingTertiary title="productos relacionados" />
			<section>
				<MoreProducts
					products={products}
					subCategory={subCategory}
					isLoading={isLoading}
				/>
			</section>
		</>
	);
};
