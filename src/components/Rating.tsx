import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export const Rating = () => {
	return (
		<div className="product-rating">
			<FontAwesomeIcon className="icon" icon={faStar} />
			<FontAwesomeIcon className="icon" icon={faStar} />
			<FontAwesomeIcon className="icon" icon={faStar} />
			<FontAwesomeIcon className="icon" icon={faStar} />
			<FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
			<span>4.7(21)</span>
		</div>
	);
};
