import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

import { FC } from 'react';
import { IProduct } from '../../interfaces/Product';
import Image from 'next/image';

interface Props {
	product: IProduct;
}

export const Card: FC<Props> = ({ product }) => {
	return (
		<NextLink href={`/detail/${product.slug}`} passHref prefetch={false}>
			<a className="card">
				<div className="image">
					<Image
						src={`${product.image[0]}`}
						width={250}
						height={250}
						objectFit="cover"
						alt={`${product.title}`}
					/>
				</div>
				<div className="content">
					<div className="title">
						<h3>{product.title}</h3>
					</div>
					<div className="stars">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStarHalfAlt} />
					</div>
					<div className="price">
						Bs {product.price} <span>Bs {product.oldPrice}</span>
					</div>
				</div>
			</a>
		</NextLink>
	);
};
