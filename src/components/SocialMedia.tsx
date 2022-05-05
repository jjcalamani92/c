import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faFacebookF,
	faTwitter,
	faLinkedin,
	faWhatsapp,
	faInstagram,
	faPinterest,
	faTelegram
} from '@fortawesome/free-brands-svg-icons';
export const SocialMedia = () => {
	return (
		<div className="share">
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faFacebookF} />
			</a>
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faInstagram} />
			</a>
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faTwitter} />
			</a>
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faLinkedin} />
			</a>
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faPinterest} />
			</a>
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faWhatsapp} />
			</a>
			<a href="#">
				<FontAwesomeIcon className="iconS" icon={faTelegram} />
			</a>
		</div>
	);
};
